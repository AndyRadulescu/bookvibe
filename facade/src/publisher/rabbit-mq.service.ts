import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

export class RabbitMQService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'books',
        queueOptions: { durable: true },
      },
    });
  }

  searchBooks() {
    return this.client.send('search', {book:"Lord of the rings", id:'searchForTitle'});
  }
}
