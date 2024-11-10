import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

export class RabbitMQService {
  private searchBook: ClientProxy;
  private isbn: ClientProxy;

  constructor() {
    this.searchBook = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'searchBooks',
        queueOptions: { durable: true },
      },
    });
    this.isbn = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'isbn',
        queueOptions: { durable: true },
      },
    });
  }

  searchBooksByName(name: String) {
    return this.searchBook.send('searchBooks', { book: name });
  }

  searchBookByIsbn(isbn: String) {
    return this.isbn.send('isbn', { isbn: isbn });
  }
}
