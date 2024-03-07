import { IsArray, IsNumber, IsString } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateWordDTO {
  @IsString()
  readonly word!: string;

  @IsArray()
  readonly options!: string[];

  @IsString()
  readonly meaning!: string;

  @IsString()
  readonly example!: string;

  @IsArray()
  readonly synonyms!: string[];

  @IsNumber()
  readonly answer!: number;
}

export class UpdateWordDTO extends PartialType(CreateWordDTO) {}
