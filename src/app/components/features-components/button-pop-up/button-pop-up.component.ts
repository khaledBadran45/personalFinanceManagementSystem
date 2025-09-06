import { Component, Input, ViewChild } from '@angular/core';
import { PopUPComponent } from '../pop-up/pop-up.component';
import { popUpContent } from '../pop-up/pop-up-model';
import { BudgetFormComponent } from '../../high-level-components/budgets/budget-form/budget-form.component';
import { Budget } from '../budget-card/budget-card-model';

@Component({
  selector: '[buttonPopUP]',
  imports: [PopUPComponent, BudgetFormComponent],
  templateUrl: './button-pop-up.component.html',
  styleUrl: './button-pop-up.component.scss',
})
export class ButtonPopUpComponent {
  @ViewChild(BudgetFormComponent) BudgetFormComponent!: BudgetFormComponent;
  popUpVisibility: boolean = false;
  @Input() popUpContent!: popUpContent;

  onClose() {
    this.popUpVisibility = false;
  }
  makePopUpVisible() {
    this.popUpVisibility = true;
  }
  isVisible() {
    return this.popUpVisibility;
  }
  patch(budget: Budget) {
    // check if view is initalized please do this .
    setTimeout(() => {
      if (this.BudgetFormComponent) {
        this.BudgetFormComponent.patchBudget(budget);
        // this.BudgetFormComponent.req = 'edit';
      } else {
        console.error('BudgetFormComponent is still undefined!');
      }
    }, 1);
  }
  addBudget() {
    this.makePopUpVisible();
  }
}
