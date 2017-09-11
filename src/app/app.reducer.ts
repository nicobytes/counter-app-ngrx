import { CounterReducer } from './counter.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
  counter: number;
}

export const rootReducer: ActionReducerMap<AppState> = {
  counter: CounterReducer,
};