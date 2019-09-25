import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import { ToggleAllTodoAction } from '../todo.actions';


// actions
import { AddTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  todoInput: FormControl;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.InitAddTodoForm();
  }

  public InitAddTodoForm() {
    this.todoInput = new FormControl('', Validators.required);
  }

  /**
   * addTodo
   */
  public addTodo( ) {
    console.log( this.todoInput.value);
    console.log( this.todoInput.valid);
    if (this.todoInput.invalid) {
      return;
    }
    const action = new AddTodoAction( this.todoInput.value );
    this.store.dispatch( action );
    this.todoInput.setValue('');
  }

  /**
   * toggleAll
   */
  public toggleAll() {
    const actionToggleAll = new ToggleAllTodoAction( true );
    this.store.dispatch( actionToggleAll);
  }

}
