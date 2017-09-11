import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] increment';
export const DECREMENT = '[Counter] decrement';
export const PLUS = '[Counter] plus';
export const RESET = '[Counter] reset';

export interface PlusAction extends Action{
  payload: number;
}