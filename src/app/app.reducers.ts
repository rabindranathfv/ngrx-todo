import { Todo } from './models/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo-components/todo.reducer';
import * as fromFilters from './filter/filter.reducer';

import * as fromFiltersActions from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filter: fromFiltersActions.filterValid;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilters.filterReducer
};
