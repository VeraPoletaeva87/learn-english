import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateWordDTO, UpdateWordDTO } from './words-models';
import type { Word } from './words-schema';
import { WordsService } from './words-service';

@Controller('words')
export class WordsController {
  constructor(private readonly wordService: WordsService) {}

  @Get()
  async findAll(): Promise<Word[]> {
    const response = await this.wordService.findAll();
    console.log(response);
    return response;
  }

  @Get(':id')
  findOne(@Param('id') prodId: string): Promise<Word> {
    return this.wordService.findOne(prodId);
  }

  @Post()
  create(@Body() dto: CreateWordDTO): Promise<Word> {
    return this.wordService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWordDTO): Promise<Word> {
    return this.wordService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Word> {
    return this.wordService.delete(id);
  }
}
