import { AddTodo } from './dtos/add.dto';
import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 4000,
      },
    });
  }
  
  fetchAll(): Promise<unknown> {
    return this.client.send<string, string>('fetchAll', '').toPromise();
  }

  addTodo( addTodo: AddTodo): Promise<unknown> {
    return this.client.send<string, any>('addTodo', addTodo).toPromise();
  }

  fetchOne(id: string): Promise<unknown> {
    return this.client.send<string, string>('fetchOne', id).toPromise();
  }
}
