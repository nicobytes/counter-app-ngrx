import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET, PLUS } from './../counter.actions';
import { AppState } from './../app.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

  counter: number;
  
  constructor(
    private store: Store<AppState>
  ) {
    this.readCounterState();
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }

  plus(){
    this.store.dispatch({ type: PLUS, payload: 2 });
  }

  private readCounterState(){
    this.store.select('counter')
    .subscribe(counter =>{
      this.counter = counter;
    });
  }

}
