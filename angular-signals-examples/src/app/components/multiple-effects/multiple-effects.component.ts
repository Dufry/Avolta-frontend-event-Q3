import {Component, effect, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-counter-with-multiple-effects',
  standalone: true,
  template: `
    The current value of score is: {{ score() }} <br/>
  The current value of counter is: {{ counter() }} <br/>
  <button (click)="increaseScore()">Increase Score</button>
  <button (click)="increaseCounter()">Increase Counter</button>`

})
export class MultipleEffectsComponent {

  score: WritableSignal<number> = signal(0);
  counter: WritableSignal<number> = signal(0);
  anotherCounter: WritableSignal<number> = signal(0);

  constructor() {
    effect(() => {
      // this method will be triggered ONLY when counter or anotherCounter has been updated
      if (this.anotherCounter() === 0) {
        console.log(`COUNTER: ${this.counter()}`);
      } else {
        console.log(`ANOTHER COUNTER: ${this.anotherCounter()}`);
      }
    });

    effect(() => {
      // this method will be triggered ONLY when score has been updated
      console.log(`SCORE: ${this.score()}`);
    });
  }

  increaseScore() {
    this.score.update(value => value + 1); // this will increment the current value of score by 1
  }

  increaseCounter() {
    this.counter.update(value => value + 1); // this will increment the current value of counter by 1
  }

}
