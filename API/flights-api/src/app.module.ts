/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsModule } from './hotels/hotels.module';

@Module({
  imports: [
    //replace code from here| (mongodb...) until the .net which is over here-------------------|    leave "/API"
    //                      v                                                                  v
    MongooseModule.forRoot('mongodb+srv://timmyzammit:stupidPassword@apitest.2ztg8nb.mongodb.net/API'),
    FlightsModule,
    HotelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
