import { Component, input } from '@angular/core';
import { CardItemComponent } from "../card-item/card-item.component";
import { TotalserviceComponent } from "./totalservice/totalservice.component";

@Component({
    selector: 'app-pots',
    imports: [CardItemComponent, TotalserviceComponent],
    templateUrl: './pots.component.html',
    styleUrl: './pots.component.scss'
})
export class PotsComponent {
    link = input.required<string>();
}
