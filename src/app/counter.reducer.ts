import { Action } from '@ngrx/store';
import { PlusAction, INCREMENT, DECREMENT, RESET, PLUS } from './counter.actions';

export const CounterReducer = (state: number = 0, action: Action)=>{
  switch(action.type){
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case PLUS:
      return state + (<PlusAction>action).payload;
    case RESET:
      return state + (<PlusAction>action).payload;
    default:
      return state;
  }
} 