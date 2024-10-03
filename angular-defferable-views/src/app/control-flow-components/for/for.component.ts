import { Component, OnInit } from '@angular/core';
import { Car, CarService } from '../../services/car.service';
import { CarElementComponent } from "../../components/car-element/car-element.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [CarElementComponent, ButtonModule],
  providers: [CarService],
  styles: [`.code-picture { width: 100%; border-radius: 1rem; }`],
  templateUrl: './for.component.html'
})
export class ForComponent implements OnInit {
  cars!: Car[];

  showCode: boolean = false;

  constructor(private carService: CarService) {}

  ngOnInit() {
    // Adding this timeout for demo purposes to show @for @empty property
    setTimeout(() => {
      this.getCars();
    }, 4000);

  }

  getCars() {
    this.cars = Array.from({ length: 50 })
      .map((_, i) => 
        this.carService.generateCar(i + 1)
      )
  }
}
