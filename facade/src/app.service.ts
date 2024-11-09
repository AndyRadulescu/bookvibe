import { Injectable } from '@nestjs/common';
import { RabbitMQService } from './publisher/rabbit-mq.service';

@Injectable()
export class AppService {

  constructor(private publisherService: RabbitMQService) {
  }

  getHello(): string {
    this.publisherService.sendNotification().subscribe((d) => console.log(d));
    return 'Hello World!';
  }
}
