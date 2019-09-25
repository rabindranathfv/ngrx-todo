import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo-components',
  templateUrl: './todo-components.component.html',
  styleUrls: ['./todo-components.component.scss']
})
export class TodoComponentsComponent implements OnInit {

  completed = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  /**
   * toggleAllTodo
   */
  public toggleAllTodo() {
    this.completed = !this.completed;
    const actionToggleAll = new ToggleAllTodoAction( this.completed );
    this.store.dispatch( actionToggleAll );
  }

}
