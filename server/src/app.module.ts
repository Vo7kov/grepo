import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [UsersModule, StoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
