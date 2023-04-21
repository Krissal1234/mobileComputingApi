import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  findAll(
    @Param("departureLocation") departureLocation: string,
    @Param("departureDate") departureDate: string,
    @Param("arrivalDate") arrivalDate: string,

    @Query("limit") limit: number,

  ) {
    return this.flightsService.findAll(departureLocation,departureDate,arrivalDate,limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightsService.findOne(+id);
  }

}
