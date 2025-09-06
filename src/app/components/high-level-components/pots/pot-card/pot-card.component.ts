import { Component, input } from '@angular/core';
import { CardTitleComponent } from '../../../features-components/budget-card/card-title/card-title.component';
import { pot } from '../pot-model';

@Component({
  selector: 'app-pot-card',
  imports: [CardTitleComponent],
  templateUrl: './pot-card.component.html',
  styleUrl: './pot-card.component.scss',
})
export class PotCardComponent {
  pot = input.required<pot>();
}
