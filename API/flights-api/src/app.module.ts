import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://database-service:27017/spot'),
    FlightsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
