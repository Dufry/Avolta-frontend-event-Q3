import { Component, Input } from '@angular/core';
import { Car } from '../../services/car.service';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-car-element',
  standalone: true,
  imports: [TagModule, ChipModule ],
  templateUrl: './car-element.component.html',
  styleUrl: './car-element.component.scss'
})
export class CarElementComponent {
  @Input() car!: Car;
}
