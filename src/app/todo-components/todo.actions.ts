import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const UPDATE_TODO = '[TODO] Update todo';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor( public text: string ) {

    }
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor( public text: string ) {

    }
}

export class UpdateTodoAction implements Action {
    readonly type = UPDATE_TODO;

    constructor( public text: string ) {

    }
}

export type Actions = { AddTodoAction, DeleteTodoAction, UpdateTodoAction };
