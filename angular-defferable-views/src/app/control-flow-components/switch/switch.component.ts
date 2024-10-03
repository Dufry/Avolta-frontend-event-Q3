import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [TagModule,ButtonModule],
  styles: [`.code-picture { width: 100%; border-radius: 1rem; }`],
  template: `
    <div class="flex">

      @switch (color) {
        @case ("red") {
          <p-tag severity="danger" value="Danger"/>
        }
        @case ("yellow") {
          <p-tag severity="warning" value="Warning"/>
        }
        @case ("green") {
          <p-tag severity="success" value="Success"/>
        }
        @default {
            <p>Invalid color!</p>
        }
      }

    </div>

    <button pButton class="mt-4 mb-2" (click)="showCode = !showCode" severity="warning">Show code</button>
    @if (showCode) {
      <img src="./img/switch.png" class="code-picture" />
    }
  `
})
export class SwitchComponent {
    color = "green";

    showCode: boolean = false;
}
