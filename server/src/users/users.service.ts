import { forwardRef, Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/prisma.service';
import { ScanDto } from 'src/users/dto/scanDto';
import { UsersGateway } from 'src/users/users.gateway';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

type Choice = {
  index: number;
  message: {
    role: string;
    content: string;
    refusal: null;
  };
};

type GPTResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
};

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => UsersGateway))
    private readonly usersGateway: UsersGateway,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async scan(scanDto: ScanDto) {
    const { goods, email } = scanDto;
    const prompt = `Given a list of product links, parse the prices of only eco-friendly products, calculate the total sum of their prices, and take 10% of that total. Return the result as a rounded whole number. RETURN ONLY NUMBER. Example: 50 ${JSON.stringify(goods)}`;

    const { data } = await axios.post<GPTResponse>(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GPT_AUTH_KEY}`,
        },
      },
    );

    const user = await this.prisma.user.findUnique({ where: { email } });
    const points = +data.choices[0].message.content;

    const updatedUser = await this.prisma.user.update({
      where: { email },
      data: { points: user.points + points },
    });

    await this.usersGateway.sendSessionUpdate(email);

    return updatedUser;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  update(email: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { email }, data: updateUserDto });
  }

  remove(email: string) {
    return this.prisma.user.delete({ where: { email } });
  }
}
