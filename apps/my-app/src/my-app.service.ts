import { Injectable } from '@nestjs/common';
import { AddTodo } from './dtos/add.dto';

@Injectable()
export class MyAppService {
private readonly todos = [

];

  fetchAll() {
    return this.todos;
  }


  addTodo(addTodo: AddTodo): any {
    console.log(addTodo)
    const todo = this.todos.push({id: Math.floor(Math.random() * 10), title: addTodo.title})
    return {
      todo
    }
  }
  fetchOne(id: number) {
    return this.todos.find((item)=>item.id == id);
  }
}
