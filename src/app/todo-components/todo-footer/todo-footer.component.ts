import { Component, OnInit } from '@angular/core';
import * as fromFilters from '../../filter/filter.actions';
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

  constructor( private store: Store<AppState>) {  }

  ngOnInit() {
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

}
