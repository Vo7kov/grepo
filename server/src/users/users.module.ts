import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UsersGateway } from 'src/users/users.gateway';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersGateway, PrismaService],
})
export class UsersModule {}
