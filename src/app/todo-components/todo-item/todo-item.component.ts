import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, UpdateTodoAction, DeleteTodoAction } from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: Todo;
  @ViewChild('updateTodoItem') updateBtnTodoItem: ElementRef;
  public checkField: FormControl;
  public todoInput: FormControl;

  update: boolean;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    console.log(this.todoItem);
    this.initEditForm();
    this.todoChecked();
  }

  public initEditForm() {
    this.todoInput = new FormControl(this.todoItem.text, Validators.required);
    this.checkField = new FormControl(this.todoItem.completed);
  }

  /**
   * updateTodo
   */
  public updateTodo() {
    this.update = true;
    console.log(this.todoInput.value);
    setTimeout(() => {
      this.updateBtnTodoItem.nativeElement.select();
    }, 1);
  }

  /**
   * todoCheck
   */
  public todoChecked() {
    this.checkField.valueChanges.subscribe( () => {
      const action = new ToggleTodoAction( this.todoItem.id );
      this.store.dispatch( action );
    });
  }

  /**
   * endUpdateTodo
   */
  public endUpdateTodo() {

    if (this.todoInput.invalid ) {
      return;
    }
    if (this.todoInput.value === this.todoItem.text) {
      return;
    }
    const actionUpdt = new UpdateTodoAction( this.todoItem.id, this.todoInput.value );
    this.store.dispatch( actionUpdt );
    this.update = false;
  }

  /**
   * deleteTodo
   */
  public deleteTodo() {
    const actionDelete = new DeleteTodoAction( this.todoItem.id );
    this.store.dispatch( actionDelete );
  }

}
