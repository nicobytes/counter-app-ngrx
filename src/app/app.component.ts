import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CouterAction from './counter.actions';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

	private readCounterState(){
    this.store.select('counter')
    .subscribe(counter =>{
      this.counter = counter;
    });
  }
}
