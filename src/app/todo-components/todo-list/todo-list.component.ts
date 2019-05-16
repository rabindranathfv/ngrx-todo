import { Component, OnInit } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( (state) => {
      console.log(state);
      this.todoList = [...state.todos];
    });
  }

}
