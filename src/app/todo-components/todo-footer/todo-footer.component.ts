import { Component, OnInit } from '@angular/core';
import * as fromFilters from '../../filter/filter.actions';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  public filtersValid: fromFilters.filterValid [] = ['todos', 'completados', 'pendientes'];

  constructor() { }

  ngOnInit() {
  }

}
