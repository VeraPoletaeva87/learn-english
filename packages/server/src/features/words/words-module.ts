import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WordsController } from './words-controller';
import { Word, WordsSchema } from './words-schema';
import { WordsService } from './words-service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Word.name,
        schema: WordsSchema,
      },
    ]),
  ],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
