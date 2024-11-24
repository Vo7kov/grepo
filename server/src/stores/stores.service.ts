import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  constructor(private readonly prisma: PrismaService) {}

  create(createStoreDto: CreateStoreDto) {
    return this.prisma.store.create({ data: createStoreDto });
  }

  findAll() {
    return this.prisma.store.findMany();
  }

  findOne(id: string) {
    return this.prisma.store.findUnique({ where: { id } });
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.prisma.store.update({ where: { id }, data: updateStoreDto });
  }

  remove(id: string) {
    return this.prisma.store.delete({ where: { id } });
  }
}
