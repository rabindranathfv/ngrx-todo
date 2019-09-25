import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
    console.log(this.todoItem);
    this.initEditForm();
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
   * endUpdateTodo
   */
  public endUpdateTodo() {
    this.update = false;
  }

}
