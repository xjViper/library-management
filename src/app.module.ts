import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ReadersModule } from './readers/readers.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [BooksModule, ReadersModule, LocationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
