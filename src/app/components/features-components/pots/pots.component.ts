import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CardItemComponent } from "../card-item/card-item.component";
import { TotalserviceComponent } from "./totalservice/totalservice.component";
import { PotsService } from '../../high-level-components/pots/pots.service';
import { take } from 'rxjs';
import { pot } from '../../high-level-components/pots/pot-model';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-pots',
    imports: [CardItemComponent, CurrencyPipe,TotalserviceComponent],
    templateUrl: './pots.component.html',
    styleUrl: './pots.component.scss'
})
export class PotsComponent implements OnInit {
    pots = inject(PotsService);
    link = input.required<string>();
    list = signal<pot[]>([])
    ngOnInit() {
        // Initialization logic here
        this.pots.potsList$.pipe(take(1)).subscribe(potsList => {
            this.list.set(potsList.slice(0,4))
            console.log(this.list());
              // Log first 4 pots for brevity
        });
    }
}
