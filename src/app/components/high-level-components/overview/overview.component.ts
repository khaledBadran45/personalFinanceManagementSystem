import { Component, inject, OnInit } from '@angular/core';
import { ListOfCardsComponent } from '../../features-components/list-of-cards/list-of-cards.component';
import { PotsComponent } from '../../features-components/pots/pots.component';
import { RecurringItemComponent } from "../../features-components/recurring-item/recurring-item.component";
import { ContainerComponent } from "../../low-level-components/container/container.component";
import { BudgetCardComponent } from '../../features-components/budget-card/budget-card.component';
import { BudgetsService } from '../budgets/budgets.service';
import { Subscription } from 'rxjs';
import { Budget } from '../../features-components/budget-card/budget-card-model';
import { TransactionsService } from '../transactions/transactions.service';
import { Transaction } from '../../high-level-components/transactions/transactions.model';
import { TransactionsListComponent } from "../../features-components/transactions-list/transactions-list.component";
import { CardItemComponent } from "../../features-components/card-item/card-item.component";
@Component({
    selector: 'app-overview',
    imports: [
    ListOfCardsComponent,
    PotsComponent,
    RecurringItemComponent,
    ContainerComponent,
    TransactionsListComponent,
    CardItemComponent
],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
    budgetService = inject(BudgetsService);
    transactionService = inject(TransactionsService);
    sub!: Subscription;
    budgetList: Budget[] = [];
    trs: Transaction[] = [];
    constructor() {
        
    }
    ngOnInit(): void {
        this.getBudgetList();
        this.trs = this.transactionService.src.splice(0, 8);
    }
    getBudgetList() {
        this.sub = this.budgetService.budgetList.subscribe((list) => {
            this.budgetList = list;
        });
    }
}
