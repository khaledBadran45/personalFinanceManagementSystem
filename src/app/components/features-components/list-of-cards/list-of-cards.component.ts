import { Component } from '@angular/core';
import { FigureCardComponent } from "../../low-level-components/figure-card/figure-card.component";
// import { figureCardTitle } from '../../interfaces/low-level-interfaces/figure-card';

@Component({
    selector: 'app-list-of-cards',
    imports: [FigureCardComponent],
    templateUrl: './list-of-cards.component.html',
    styleUrl: './list-of-cards.component.scss'
})
export class ListOfCardsComponent {
  // figureCardTitle!:figureCardTitle ;
}
