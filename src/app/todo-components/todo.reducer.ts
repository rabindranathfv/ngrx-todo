import * as fromTodo from './todo.actions';
import { Todo } from '../models/todo.model';

const stateInitial: Todo[] = [];

export function todoReducer( state = stateInitial, action: fromTodo.Actions) {
    switch ( action.type ) {
        case fromTodo.ADD_TODO:
            const todo = new Todo( action.text);
            return [...state, todo ];

        default:
            return state;
    }
}
