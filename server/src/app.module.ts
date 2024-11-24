import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PointsModule } from './points/points.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [UsersModule, PointsModule, StoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
