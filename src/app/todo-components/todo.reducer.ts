import * as fromTodo from './todo.actions';
import { Todo } from '../models/todo.model';

const todo1 = new Todo('Learn ngrx');
const todo2 = new Todo('Learn ngrx in angular');
const stateInitial: Todo[] = [todo1, todo2];

export function todoReducer( state = stateInitial, action: fromTodo.Actions) {
    switch ( action.type ) {
        case fromTodo.ADD_TODO:
            const todo = new Todo( action.text);
            return [...state, todo ];

        default:
            return state;
    }
}
