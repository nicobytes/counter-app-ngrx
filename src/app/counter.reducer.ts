import * as CounterAction from './counter.actions';

export type Action = CounterAction.CounterActionType;

export function CounterReducer(state: number = 0, action: Action){
  switch(action.type){
    case CounterAction.INCREMENT:
      return state + 1
    case CounterAction.DECREMENT:
      return state - 1
    case CounterAction.PLUS:
      return state + action.payload;
    case CounterAction.RESET:
      return 0;
    default:
      return state;
  }
}