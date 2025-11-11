import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ListOfCardsComponent } from '../../features-components/list-of-cards/list-of-cards.component';
import { PotsComponent } from '../../features-components/pots/pots.component';
import { ContainerComponent } from "../../low-level-components/container/container.component";
import { BudgetsService } from '../budgets/budgets.service';
import { Subscription, take } from 'rxjs';
import { Budget } from '../../features-components/budget-card/budget-card-model';
import { TransactionsService } from '../transactions/transactions.service';
import { Transaction } from '../../high-level-components/transactions/transactions.model';
import { TransactionsListComponent } from "../../features-components/transactions-list/transactions-list.component";
import { CardItemComponent } from "../../features-components/card-item/card-item.component";
import { PotsService } from '../pots/pots.service';
import { ChartOptions } from '../budgets/budgets.component';
import { ChartComponent } from "ng-apexcharts";
@Component({
    selector: 'app-overview',
    imports: [
    ListOfCardsComponent,
    PotsComponent,
    ContainerComponent,
    TransactionsListComponent,
    CardItemComponent,
    ChartComponent
],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit {
    budgetService = inject(BudgetsService);
    potsService = inject(PotsService);
    transactionService = inject(TransactionsService);
    sub = new Subscription();
    budgetList: Budget[] = [];
    trs: Transaction[] = [];
    public chartOptions: Partial<ChartOptions> = {
        series: [],
        colors: [],
        chart: {
            type: "donut"
        },
        labels: [],
        responsive: [
            {
                breakpoint: 200,
                options: {
                    chart: {
                        width:"50px"
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }
        ]
    };
    constructor() { }
    addBudgetChart(){
      this.sub = this.budgetService.chartOptions.subscribe((options)=>{
            this.chartOptions.series = options.maxmumspends;
            this.chartOptions.labels = options.labels;
            this.chartOptions.colors = options.colors;
        });
    };
    ngOnInit(): void {
        this.addBudgetChart();
        this.getBudgetList();
        this.trs = this.transactionService.src.splice(0, 8);

    }
    getBudgetList() {
        this.sub = this.budgetService.budgetList.pipe(take(1)).subscribe((list) => {
            this.budgetList = list;
        });
    }
}
