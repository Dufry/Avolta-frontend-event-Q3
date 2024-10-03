import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-skeleton-card',
  standalone: true,
  imports: [SkeletonModule],
  templateUrl: './skeleton-card.component.html'
})
export class SkeletonCardComponent {

}
