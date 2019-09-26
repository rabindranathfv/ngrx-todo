import { Pipe, PipeTransform } from '@angular/core';
import * as fromFilter from '../filter/filter.actions';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Todo[], filter: fromFilter.filterValid): Todo[] {
    console.log(todos);
    console.log(filter);
    if (filter === 'completados') {
      return todos.filter( todo => todo.completed);
    } else if (filter === 'pendientes') {
      return todos.filter( todo => !todo.completed);
    } else {
      return todos;
    }
  }

}
