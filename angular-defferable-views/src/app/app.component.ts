import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

interface ControlFlowOperator {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public controlFlowOperators: ControlFlowOperator[]= [
    {
      title: "@if, @else-if and @else",
      description: "Conditionally display content with @if, @else-if and @else",
      link: "if"
    },
    {
      title: "@for",
      description: "Repeat content with the @for block",
      link: "for"
    },
    {
      title: "@switch",
      description: "Conditionally display content with the @switch block",
      link: "switch"
    },
    {
      title: "@defer",
      description: "Deferred loading with @defer",
      link: "defer"
    },
    {
      title: "@back to home",
      description: "",
      link: ""
    }
  ]
}
