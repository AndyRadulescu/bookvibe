import { Injectable } from '@nestjs/common';
import { RabbitMQService } from './publisher/rabbit-mq.service';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private publisherService: RabbitMQService) {
  }

  getHello(): Observable<any> {
    return this.publisherService.searchBooks();
  }
}
