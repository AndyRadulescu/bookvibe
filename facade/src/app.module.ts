import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQService } from './publisher/RabbitMQService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RabbitMQService],
})
export class AppModule {
}
