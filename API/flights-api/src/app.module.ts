/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsModule } from './hotels/hotels.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://krissal1234:20030902@apitest.jizb9xr.mongodb.net/API'),
    FlightsModule,
    HotelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
