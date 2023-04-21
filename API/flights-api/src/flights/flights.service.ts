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

  findAll(departureLocation: string, departureDate: string, returnDate: string, limit: number) {
    let flights = this.flightModel.find()
    return `This action returns all flights`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flight`;
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}
