import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Word extends Document<string> {
  @Prop({ required: true, type: String })
  readonly word!: string;

  @Prop({ required: true, type: [String] })
  readonly options!: string;

  @Prop({ required: true, type: String })
  readonly meaning!: string;

  @Prop({ required: true, type: String })
  readonly example!: string;

  @Prop({ required: true, type: String })
  readonly synonyms!: string;
}

export const WordsSchema = SchemaFactory.createForClass(Word);
