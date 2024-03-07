import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { WordsModule } from '../features/words/words-module';

import { AppController } from './app-controller';

const clientRootPath = join(__dirname, '..', '..', '..', 'client', 'dist');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get('DB_URI');
        return { uri: uri };
      },
    }),
    ServeStaticModule.forRoot({
      exclude: ['/api/(.*)', '/docs'],
      rootPath: clientRootPath,
    }),
    WordsModule,
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
