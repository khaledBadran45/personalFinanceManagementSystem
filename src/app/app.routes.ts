import { Routes } from '@angular/router';
import { OverviewComponent } from './components/high-level-components/overview/overview.component';
import { TransactionsComponent } from './components/high-level-components/transactions/transactions.component';
import { BudgetsComponent } from './components/high-level-components/budgets/budgets.component';
import { PotsComponent } from './components/high-level-components/pots/pots.component';
import { RecurringBillsComponent } from './components/high-level-components/recurring-bills/recurring-bills.component';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'transactons', component: TransactionsComponent },
  { path: 'budgets', component: BudgetsComponent },
  { path: 'pots', component: PotsComponent },
  { path: 'recurring_bills', component: RecurringBillsComponent },
];
