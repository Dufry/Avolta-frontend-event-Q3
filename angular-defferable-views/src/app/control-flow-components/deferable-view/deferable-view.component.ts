import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SkeletonCardComponent} from "../../components/skeleton-card/skeleton-card.component";
import {BigComponentComponent} from "../../components/big-component/big-component.component";


import { ButtonModule} from "primeng/button";
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-deferable-view',
  standalone: true,
  imports: [
    SkeletonCardComponent, ProgressBarModule, CommonModule, ButtonModule, BigComponentComponent
  ],
  templateUrl: './deferable-view.component.html'
})
export class DeferableViewComponent {
  showGrid = false;

  async getGridData() {
    this.showGrid = true;
  }
}
