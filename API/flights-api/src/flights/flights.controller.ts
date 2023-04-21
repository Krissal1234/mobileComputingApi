import { Controller, Get, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}


  @Get()
  findAll(
    @Param('departureLocation') departureLocation: string,
    @Param('departureDate') deapartureDate: string,
    @Param('returnDate') returnDate: string,
    @Query('limit') limit : number,
    
  ) {
    // let flights = await this.flightsService.findAllFlights(departureLocation,deapartureDate,returnDate, limit);

    return this.flightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightsService.findOne(+id);
  }

}
