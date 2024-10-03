import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [ButtonModule],
  styles: [`.code-picture { width: 100%; border-radius: 1rem; }`],
  template: `
    <button pButton class="mr-2" (click)="sayHi = !sayHi" severity="success">Greetings!</button>
    <button pButton class="mr-2" (click)="showGoodbye = !showGoodbye" severity="danger">Bye!</button>
    <button pButton class="mr-2" (click)="showElse()" severity="help">Show Else</button>

    <button pButton class="mr-2" (click)="showCode = !showCode" severity="warning">Show code</button>
    
    
    
    @if (sayHi) {
      <h1>Hello World! 🚀</h1>
    } 
    @else if (showGoodbye) {
      <h1>Goodbye 👋</h1>
    } 
    @else {
      <p class="mt-2">See you later...</p>
    }

    @if (showCode) {
      <img src="./img/if-code.png" class="code-picture" />
    }
    
  `,
})
export class IfComponent {
  sayHi: boolean = true;
  showGoodbye: boolean = false;
  showCode: boolean = false;

  showElse() {
    this.sayHi = false;
    this.showGoodbye = false;
  }

}
