import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  output,
  Output,
  ViewChild,
} from '@angular/core';
import { CardTitleComponent } from './card-title/card-title.component';
import { ProgressBarComponent } from '../../low-level-components/progress-bar/progress-bar.component';
import { PotsSavingMicroComponent } from '../../low-level-components/pots-saving-micro/pots-saving-micro.component';
import { Budget } from './budget-card-model';
import { CommonModule } from '@angular/common';
import { BudgetsService } from '../../high-level-components/budgets/budgets.service';
import { BudgetFormComponent } from '../../high-level-components/budgets/budget-form/budget-form.component';
import { TransactionsComponent } from '../transactions/transactions.component';
import { TransactionsService } from '../../high-level-components/transactions/transactions.service';
@Component({
  selector: 'app-budget-card',
  imports: [
    CardTitleComponent,
    ProgressBarComponent,
    PotsSavingMicroComponent,
    CommonModule,
    TransactionsComponent,
  ],
  templateUrl: './budget-card.component.html',
  styleUrl: './budget-card.component.scss',
})
export class BudgetCardComponent implements OnInit {
  cardManip: boolean = false;
  edit = output<Budget>();
  remove = output<Budget>();
  _transactionService = inject(TransactionsService);
  relatedTrs: any[] = [];
  @Input({ required: true }) budget!: Budget;
  spent: number = 0;
  remaining: number = 0;

  ngOnInit(): void {
    this.relatedTrs = this.getTransactions(this.budget.title);
    this.spent = this.relatedTrs.reduce(
      (prev, curr) => (prev += parseInt(curr.amount)),
      0
    );
    this.remaining = parseInt(this.budget.maxmumSpend) - this.spent;
  }

  getTransactions(budget: Budget) {
    return this._transactionService.getTransactionsByCategory(
      new String(budget.title).toLowerCase()
    );
  }
  cardManipulation() {
    this.cardManip = !this.cardManip;
  }
  deleteItem() {
    this.remove.emit(this.budget);
  }
  editItem() {
    this.edit.emit(this.budget);
  }
}
