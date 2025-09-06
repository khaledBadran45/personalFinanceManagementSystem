import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Transaction } from '../../high-level-components/transactions/transactions.model';
@Component({
  selector: 'app-transcation',
  imports: [CommonModule],
  templateUrl: './transcation.component.html',
  styleUrl: './transcation.component.scss',
})
export class TranscationComponent {
  trs = input.required<Transaction>();
}
