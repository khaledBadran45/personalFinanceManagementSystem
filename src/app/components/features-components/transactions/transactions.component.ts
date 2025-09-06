import { Component, input, OnInit } from '@angular/core';
import { CardItemComponent } from '../card-item/card-item.component';
import { TranscationComponent } from '../../low-level-components/transcation/transcation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [CardItemComponent, TranscationComponent, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  transactionsList = input.required<any[]>();
  ngOnInit(): void {
    
  }
}
