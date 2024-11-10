import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { RabbitMQService } from './publisher/rabbit-mq.service';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService, RabbitMQService],
})
export class AppModule {
}
