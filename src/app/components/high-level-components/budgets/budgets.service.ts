import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Budget } from '../../features-components/budget-card/budget-card-model';

@Injectable({
  providedIn: 'root',
})
export class BudgetsService {
  constructor() {
    const budget = localStorage.getItem('budget');
    if (budget) {
      this.budgetSubject.next(JSON.parse(budget));
    }
  }
  
  private budgetSubject = new BehaviorSubject<Budget[]>([]);
  budgetList = this.budgetSubject.asObservable();
  public chartOptions = this.budgetList.pipe(map((list)=>({
    maxmumspends: list.map(el => Number(el.maxmumSpend)),
    labels: list.map(el => el.title.title),
    colors: list.map(el => el.theme.id),
  })))

  // submit(Req: 'Add' | 'Edit', budget: Budget) {
  //   if (Req === 'Add') {
  //     this.addBudget(budget);
  //   } else {
  //     this.editBudget(budget);
  //   }
  // }
  // add budget to list ;
  addBudget(newBudget: any) {
    const currentBudget = this.budgetSubject.getValue();
    this.budgetSubject.next([...currentBudget, newBudget]);
    this.saveBudget();
  }
  saveBudget() {
    localStorage.setItem(
      'budget',
      JSON.stringify(this.budgetSubject.getValue())
    );
  }

  // remove budget ;
  removeBudget(budget: Budget) {
    const budgetSubjectValue: Budget[] = this.budgetSubject.getValue();
    const updatedBudget = budgetSubjectValue.filter(
      (bud) => bud.title != budget.title
    );
    this.budgetSubject.next(updatedBudget);
    this.saveBudget();
  }

  // edit budget ;
  editBudget(budgetTitle: string, budget: Budget) {

  const currentBudgets = this.budgetSubject.getValue();
  const updatedBudgets = currentBudgets.map(b =>
    b.title === budgetTitle ? budget : b
  );
  this.budgetSubject.next(updatedBudgets);
  this.saveBudget()
  }


  // Create  a Shared chart 
  // addBudgetListToChart() {
  //   let maxmumspends: number[] = [];
  //   let labels: string[] = [];
  //   let colors: string[] = [];
  //   this.budgetSubject.getValue().map((el) => {
  //     maxmumspends.push(Number(el.maxmumSpend));
  //     labels.push(el.title.title);
  //     colors.push(el.theme.id);
  //   });
  //   this.chartOptions.series = maxmumspends;
  //   this.chartOptions.labels = labels;
  //   this.chartOptions.colors = colors;
  // }
}
