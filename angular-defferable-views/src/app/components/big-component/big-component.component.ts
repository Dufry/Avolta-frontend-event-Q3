import {Component, OnInit} from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {Car, CarService} from "../../services/car.service";
import { delay, Observable, of } from 'rxjs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-big-component',
  templateUrl: './big-component.component.html',
  standalone: true,
  imports: [TableModule, CommonModule, ProgressSpinnerModule],
  providers: [CarService],
})
export class BigComponentComponent implements OnInit{
  cars!: Car[];
  virtualCars?: Car[];

  cols!: Column[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.getGridData();
  }

  getGridData() {
    return this.simulateAsyncOperation().subscribe({
      next: (res) => {
        this.cars = res;
        this.virtualCars = Array.from({ length: 10000 });
      }
    });
  }

  private simulateAsyncOperation(): Observable<Car[]> {
    // Simulate async operation with a 3-second delay of Cars data
    return of(
      Array.from({ length: 10000 })
      .map((_, i) => 
        this.carService.generateCar(i + 1)
      ))
      .pipe(delay(3000));
  }

}
