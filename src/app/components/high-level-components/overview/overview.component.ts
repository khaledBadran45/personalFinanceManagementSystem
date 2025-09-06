import { Component } from '@angular/core';
import { ListOfCardsComponent } from '../../features-components/list-of-cards/list-of-cards.component';
import { BudgetsComponent } from '../budgets/budgets.component';
import { PotsComponent } from '../../features-components/pots/pots.component';
import { TransactionsComponent } from "./../../features-components/transactions/transactions.component";
import { RecurringItemComponent } from "../../features-components/recurring-item/recurring-item.component";
import { ContainerComponent } from "../../low-level-components/container/container.component";
@Component({
    selector: 'app-overview',
    imports: [
        ListOfCardsComponent,
        PotsComponent,
        RecurringItemComponent,
        ContainerComponent
    ],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.scss'
})
export class OverviewComponent {}
