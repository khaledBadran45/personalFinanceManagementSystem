import { Component } from '@angular/core';
import { CardItemComponent } from "../card-item/card-item.component";
import { BillComponent } from "../../low-level-components/bill/bill.component";

@Component({
    selector: 'app-recurring-item',
    imports: [CardItemComponent, BillComponent],
    templateUrl: './recurring-item.component.html',
    styleUrl: './recurring-item.component.scss'
})
export class RecurringItemComponent {

}
