import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  async findAll(
    @Query("departureLocation") departureLocation: string,
    @Query("departureDate") departureDate: string,
    @Query("returnDate") returnDate: string,
    @Query("limit") limit: number,
    @Res() res,
  ) {
    const flights = await this.flightsService.findAll(departureLocation, departureDate, returnDate, limit);
    res.send(flights);
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightsService.findOne(+id);
  }

}
