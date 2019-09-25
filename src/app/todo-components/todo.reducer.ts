import * as fromTodo from './todo.actions';
import { Todo } from '../models/todo.model';

const todo1 = new Todo('Learn ngrx');
const todo2 = new Todo('Learn ngrx in angular');
const stateInitial: Todo[] = [todo1, todo2];

export function todoReducer( state = stateInitial, action: fromTodo.Actions) {
    switch ( action.type ) {
        case fromTodo.ADD_TODO:
            const todo = new Todo( action.text );
            return [...state, todo ];
        case fromTodo.TOGGLE_TODO:
            return state.map( todoUpd => {
                if ( todoUpd.id === action.id) {
                    return {
                        ...todoUpd,
                        completed: !todoUpd.completed
                    };
                } else {
                    return todoUpd;
                }
            });
        case fromTodo.UPDATE_TODO:
            return state.map( (todoItem) => {
                if ( todoItem.id === action.id ) {
                    // console.log(' **** PROCESANDO UPDATE TODO EN EL REDUCER ***', todoItem);
                    return {
                        ...todoItem,
                        text: action.text
                    };
                } else {
                    return todoItem;
                }
            });
        case fromTodo.DELETE_TODO:
                return state.filter( (todoItem) => {
                    return todoItem.id !== action.id;
                });
        default:
            return state;
    }
}
