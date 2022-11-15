import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AddTodo } from './dtos/add.dto';
import { MyAppService } from './my-app.service';

@Controller()
export class MyAppController {
  constructor(private readonly myAppService: MyAppService) {}

  @MessagePattern('fetchAll')
  fetchAll(): unknown {
    return this.myAppService.fetchAll();
  }

  @MessagePattern('addTodo')
  addTodo(addTodo: AddTodo): string {
    return this.myAppService.addTodo(addTodo);
  }

  @MessagePattern('fetchOne')
  fetchOne(id: number): unknown {
    return this.myAppService.fetchOne(id);
  }

}
