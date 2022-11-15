import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AddTodo } from './dtos/add.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  fetchAll(): Promise<unknown> {
    return this.appService.fetchAll();
  }

  @Post('/')
  addTodo(@Body() addTodo: AddTodo): Promise<unknown> {
    return this.appService.addTodo(addTodo);
  }
  @Get('/:id')
  fetchOne(@Param('id') id: string): Promise<unknown> {
    return this.appService.fetchOne(id);
  }

}
