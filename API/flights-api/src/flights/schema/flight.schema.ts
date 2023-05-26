/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Flight {

  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  origin: string;

  @Prop({ required: true })
  destination: string;

  @Prop({ required: true })
  departureDate: string;

  @Prop({ required: true })
  departureTime: string;

  @Prop({ required: true })
  arrivalDate: string;

  @Prop({ required: true })
  arrivalTime: string;

  @Prop({ required: true })
  flightDuration: string;

  @Prop({ required: true })
  airline: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  imageUrl: string;


}

export type FlightDocument = Flight & Document;
export const FlightSchema = SchemaFactory.createForClass(Flight);
