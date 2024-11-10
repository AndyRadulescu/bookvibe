import { Injectable } from '@nestjs/common';
import { RabbitMQService } from './publisher/rabbit-mq.service';
import { Observable } from 'rxjs';

@Injectable()
export class BooksService {

  constructor(private publisherService: RabbitMQService) {
  }

  getBooksListByName(name: string): Observable<any> {
    return this.publisherService.searchBooksByName(name);
  }

  getBookByIsbn(isbn: string): Observable<any> {
    return this.publisherService.searchBookByIsbn(isbn);
  }
}
