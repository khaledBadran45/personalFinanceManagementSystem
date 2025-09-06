import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
    this.budgetSubject.getValue().find((bud, index) => {
      if (bud.title === budgetTitle) {
        this.budgetSubject.getValue()[index] = budget;
        this.saveBudget();
      }
    });
  }
}
