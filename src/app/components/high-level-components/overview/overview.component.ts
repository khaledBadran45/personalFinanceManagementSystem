import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
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
import { ChartComponent } from "../../low-level-components/chart/chart.component";
@Component({
    selector: 'app-overview',
    imports: [
        ListOfCardsComponent,
        PotsComponent,
        RecurringItemComponent,
        ContainerComponent,
        TransactionsListComponent,
        CardItemComponent,
        ChartComponent
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit,AfterViewInit {
    budgetService = inject(BudgetsService);
    transactionService = inject(TransactionsService);
    sub!: Subscription;
    budgetList: Budget[] = [];
    trs: Transaction[] = [];
    @ViewChild(ChartComponent) donatChart!: ChartComponent;
    constructor() {}
    ngAfterViewInit(): void {
         this.addBudgetListToChart();
    }
;
    ngOnInit(): void {
        this.getBudgetList();
        this.trs = this.transactionService.src.splice(0, 8);
       
    }
    getBudgetList() {
        this.sub = this.budgetService.budgetList.subscribe((list) => {
            this.budgetList = list;
        });
    }
    addBudgetListToChart() {
        let maxmumspends: number[] = [];
        let labels: string[] = [];
        let colors: string[] = [];
        this.budgetList.map((el) => {
            maxmumspends.push(Number(el.maxmumSpend));
            labels.push(el.title.title);
            colors.push(el.theme.id);
        });
        // console.log(this.budgetList, 'Budget Liste Here ');
        this.donatChart.chart.updateOptions({
            series: maxmumspends,
            labels: labels,
            colors: colors,
        });
    }

}
