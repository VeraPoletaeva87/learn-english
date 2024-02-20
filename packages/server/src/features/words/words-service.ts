import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import type { CreateWordDTO, UpdateWordDTO } from './words-models';
import { Word } from './words-schema';

@Injectable()
export class WordsService {
  constructor(@InjectModel(Word.name) private readonly wordModel: Model<Word>) {}

  findAll(): Promise<Word[]> {
    return this.wordModel.find({}).sort({ startDate: 'desc' }).exec();
  }

  async findOne(id: string): Promise<Word> {
    const item = await this.wordModel.findOne({ _id: id }).exec();
    return this.returnIfExists(id, item);
  }

  create(dto: CreateWordDTO): Promise<Word> {
    return this.wordModel.create(dto);
  }

  async update(id: string, dto: UpdateWordDTO): Promise<Word> {
    const item = await this.wordModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    return this.returnIfExists(id, item);
  }

  async delete(id: string): Promise<Word> {
    const item = await this.wordModel.findByIdAndDelete(id).exec();
    return this.returnIfExists(id, item);
  }

  private returnIfExists(id: string, item: Word | null): Word {
    if (!item) {
      throw new NotFoundException(`A word item with id: "${id}" is not found`);
    }
    return item;
  }
}
