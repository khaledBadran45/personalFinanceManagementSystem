import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
export interface transaction {
  path: string;
  sender: string;
  category: string;
  date: Date;
  amount: number;
}
@Component({
  selector: 'app-transcation',
  imports: [CommonModule],
  templateUrl: './transcation.component.html',
  styleUrl: './transcation.component.scss',
})
export class TranscationComponent {
  trs = input.required<transaction>();
}
