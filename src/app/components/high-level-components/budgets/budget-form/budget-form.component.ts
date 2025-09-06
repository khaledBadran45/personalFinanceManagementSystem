import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { Budget } from '../../../features-components/budget-card/budget-card-model';
import {
  Dropdown,
  Option,
} from '../../../low-level-components/dropdown-menu/dropdown.model';
import { BudgetsService } from '../budgets.service';
import { DropdownMenuComponent } from '../../../low-level-components/dropdown-menu/dropdown-menu.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../../low-level-components/input/input.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-form',
  imports: [DropdownMenuComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss',
})
export class BudgetFormComponent implements OnDestroy, OnInit {
  constructor() {}
  budgetList: Budget[] = [];
  closePopUp = output();
  sub = output<any>();
  budgetForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    maxmumSpend: new FormControl<string>('', [Validators.required]),
    theme: new FormControl<string>('', [Validators.required]),
  });
  private Sub!: Subscription;
  private BudgetService = inject(BudgetsService);
  ngOnInit(): void {
    this.getUsedOptions();
  }
  ngOnDestroy(): void {
    this.Sub.unsubscribe();
  }
  submit() {
    if (this.budgetForm.valid) {
      this.sub.emit(this.budgetForm.value);
      this.closePopUp.emit();
    }
  }
  getUsedOptions() {
    this.Sub = this.BudgetService.budgetList.subscribe((x: any) => {
      this.budgetList = x;
      console.log(this.budgetList);
    });
  }
  patchBudget(budget: Budget) {
    this.budgetForm.patchValue({
      title: budget.title,
      maxmumSpend: budget.maxmumSpend,
      theme: budget.theme,
    });
  }
  get titleControl() {
    return this.budgetForm.get('title') as FormControl;
  }
  get themeControl() {
    return this.budgetForm.get('theme') as FormControl;
  }
  get maxSpendControl() {
    return this.budgetForm.get('maxmumSpend') as FormControl;
  }

  budgetCategory: Dropdown = {
    title: 'Budget Category',
    id: 'bgdC',
    options: [
      {
        title: 'Grocires',
        id: 'Gr_1',
      },
      { title: 'Entertainment', id: 'En_2' },
      { title: 'Bills', id: 'Bi_3' },
      { title: 'Transportation', id: 'Tr_4' },
      {
        title: 'Dinning out',
        id: 'Tr_5',
      },
      {
        title: 'Personal care',
        id: 'Tr_6',
      },
      {
        title: 'Lifestyle',
        id: 'Tr_7',
      },
      {
        title: 'Shopping',
        id: 'Tr_8',
      },
      {
        title: 'General',
        id: 'Tr_9',
      },
    ],
  };
  themes: Dropdown = {
    title: 'Themes',
    options: [
      { id: '#FF5733', title: 'Sunset Orange' },
      { id: '#33FF57', title: 'Lime Green' },
      { id: '#3357FF', title: 'Ocean Blue' },
      { id: '#F1C40F', title: 'Golden Yellow' },
      { id: '#8E44AD', title: 'Royal Purple' },
      { id: '#E74C3C', title: 'Crimson Red' },
      { id: '#3498DB', title: 'Sky Blue' },
      { id: '#2ECC71', title: 'Emerald Green' },
      { id: '#1ABC9C', title: 'Aqua Teal' },
      { id: '#34495E', title: 'Steel Grey' },
    ],
    id: 'thColors',
  };
}
