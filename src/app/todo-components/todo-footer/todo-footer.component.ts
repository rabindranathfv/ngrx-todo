import { Component, OnInit } from '@angular/core';
import * as fromFilters from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  public filtersValid: fromFilters.filterValid [] = ['todos', 'completados', 'pendientes'];
  public currentFilter: fromFilters.filterValid;
  public pendings: number;


  constructor( private store: Store<AppState>) {  }

  ngOnInit() {
    this.getCurrentFilter();
    this.getPendings();
  }

  /**
   * selectFilter
   */
  public selectFilter( filter: fromFilters.filterValid) {
    console.log(filter);
    const actionFilter = new fromFilters.SetFilterAction( filter );
    this.store.dispatch( actionFilter );
  }

  /**
   * getCurrentFilter
   */
  public getCurrentFilter() {
    this.store.subscribe( (state) => {
      console.log(state);
      this.currentFilter = state.filter;
    });
  }

  public getPendings() {
    this.store.subscribe( (state) => {
      this.pendings = state.todos.filter( (item) => !item.completed).length;
      console.log(this.pendings);
    });
  }

  /**
   * deleteCompleted
   */
  public deleteCompleted() {
    const actionDeleteAll = new fromTodo.DeleteAllTodoAction();
    this.store.dispatch( actionDeleteAll );
  }

}
