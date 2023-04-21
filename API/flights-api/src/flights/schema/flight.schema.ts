import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Flight {
  @Prop({ required: true })
  origin: string;

  @Prop({ required: true })
  destination: string;

  @Prop({ required: true })
  departureDate: Date;

  @Prop({ required: true })
  arrivalDate: Date;

  @Prop({ required: true })
  airline: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  imageUrl: string;
}

export type FlightDocument = Flight & Document;
export const FlightSchema = SchemaFactory.createForClass(Flight);
