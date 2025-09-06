import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Transaction } from '../../high-level-components/transactions/transactions.model';

@Component({
  selector: 'app-transactions-list',
  imports: [CommonModule],
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.scss'
})
export class TransactionsListComponent {
  @Input({ required: true }) transactions: Transaction[] | null = []
}
