import { Injectable } from '@nestjs/common';
import { RabbitMQService } from './publisher/RabbitMQService';

@Injectable()
export class AppService {

  constructor(private publisherService: RabbitMQService) {
  }

  getHello(): string {
    this.publisherService.sendNotification().subscribe((d) => console.log(d));
    return 'Hello World!';
  }
}
