import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight, FlightDocument } from './schema/flight.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
@Injectable()
export class FlightsService {
  constructor(@InjectModel(Flight.name) private flightModel: Model<FlightDocument>) {}
  create(createFlightDto: CreateFlightDto) {
    return 'This action adds a new flight';
  }

  async findAll(departureLocation: string, departureDate: string, returnDate: string, limit: number): Promise<Flight[]> {
    let flights = this.flightModel.find().limit(limit).exec();
    return flights;
  }

  findOne(id: number) {
    return `This action returns a #${id} flight`;
  }

}
