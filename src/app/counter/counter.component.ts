import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CouterAction from './../counter.actions';
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
    this.store.dispatch(new CouterAction.IncrementAction());
  }

  decrement(){
    this.store.dispatch(new CouterAction.DecrementAction());
  }

  reset(){
    this.store.dispatch(new CouterAction.ResetAction());
  }

  plus(){
    this.store.dispatch(new CouterAction.PlusAction(2));
  }

  private readCounterState(){
    this.store.select('counter')
    .subscribe(counter =>{
      this.counter = counter;
    });
  }

}
