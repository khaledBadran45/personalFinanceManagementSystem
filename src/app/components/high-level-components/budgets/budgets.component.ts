import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ContainerComponent } from '../../low-level-components/container/container.component';
import { CommonModule } from '@angular/common';
import { BudgetCardComponent } from '../../features-components/budget-card/budget-card.component';
// import { ChartComponent } from '../../low-level-components/chart/chart.component';
import { BudgetsService } from './budgets.service';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { Budget } from '../../features-components/budget-card/budget-card-model';
import { Subscription, take } from 'rxjs';
import { PopUPComponent } from '../../features-components/pop-up/pop-up.component';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
};

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [
    ContainerComponent,
    CommonModule,
    BudgetCardComponent,
    ChartComponent,
    PopUPComponent,
    BudgetFormComponent,
  ],
  templateUrl: './budgets.component.html',
  styleUrl: './budgets.component.scss',
})
export class BudgetsComponent implements OnDestroy, OnInit {

  sub = new Subscription();
  @ViewChild(BudgetFormComponent) budgetForm!: BudgetFormComponent;
  popUpVisibililty: boolean = false;
  @ViewChild("chart") chart: ChartComponent = {} as ChartComponent;
  public chartOptions: Partial<ChartOptions> = {
    series: [],
    colors: [],
    chart: {
      type: "donut"
    },
    labels: [],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
  budgetService = inject(BudgetsService);
  budgetList: Budget[] = [];
  private req: 'Edit' | 'Add' = 'Add';
  EditingBudget!: Budget;

  ngOnInit(): void {
    this.getBudgetList();
    this.addChart();
  }
  addChart() {
    this.sub.add(
      this.budgetService.chartOptions.subscribe((options) => {
        this.chartOptions.series = options.maxmumspends;
        this.chartOptions.labels = options.labels;
        this.chartOptions.colors = options.colors;
      })
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  getBudgetList() {
    this.sub.add(
      this.budgetService.budgetList.subscribe((list) => {
        this.budgetList = list;
      })
    )

  }
  manipulateBudget(budget: Budget, req: 'Edit') {
    this.req = req;
    this.popUpVisibililty = true;
    if (req === 'Edit') {
      setTimeout(() => {
        this.EditingBudget = budget;
        this.budgetForm.patchBudget(budget);
      }, 1);
    }
  }

  onRemove(budget: Budget) {
    this.budgetService.removeBudget(budget);
    // this.addBudgetListToChart();
  }
  onSubmitBudget(budget: Budget) {
    if (this.req == 'Edit') {
      this.budgetService.editBudget(this.EditingBudget.title, budget);
    } else {
      this.budgetService.addBudget(budget);
    }
    // this.addBudgetListToChart();
  }
}
