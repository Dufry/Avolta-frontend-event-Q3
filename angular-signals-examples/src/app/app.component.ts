import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterComponent} from "./components/counter/counter.component";
import {ParentComponent} from "./components/share-data/parent.component";
import {ComputedExampleComponent} from "./components/computed-example/computed-example.component";
import {MultipleEffectsComponent} from "./components/multiple-effects/multiple-effects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ParentComponent, ComputedExampleComponent, MultipleEffectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals-examples';

}
