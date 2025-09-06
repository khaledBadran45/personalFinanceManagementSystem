import { Component, input } from '@angular/core';
import { savingMicro } from './potsSavingMicro.model';

@Component({
  selector: 'app-pots-saving-micro',
  imports: [],
  templateUrl: './pots-saving-micro.component.html',
  styleUrl: './pots-saving-micro.component.scss',
})
export class PotsSavingMicroComponent {
  savingMicro = input.required<savingMicro>();
}
