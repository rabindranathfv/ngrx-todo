import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] toggle all todos';
export const DELETE_TODO = '[TODO] Delete todo';
export const DELETE_ALL_TODO = '[TODO] Delete all todos';
export const UPDATE_TODO = '[TODO] Update todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor( public text: string ) {

    }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor( public id: number ) {

    }
}


export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor( public completed: boolean ) {

    }
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor( public id: number ) {

    }
}

export class DeleteAllTodoAction implements Action {
    readonly type = DELETE_ALL_TODO;
}

export class UpdateTodoAction implements Action {
    readonly type = UPDATE_TODO;

    constructor( public id: number, public text: string ) {
        // console.log(`id del TODO ${id} y cambio ${text}`);
    }
}

export type Actions = AddTodoAction | ToggleTodoAction | ToggleAllTodoAction | DeleteTodoAction | DeleteAllTodoAction | UpdateTodoAction ;
