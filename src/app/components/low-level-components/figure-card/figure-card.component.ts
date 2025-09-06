import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-figure-card',
    imports: [],
    templateUrl: './figure-card.component.html',
    styleUrl: './figure-card.component.scss'
})
export class FigureCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) value!: string;
  @Input() isActive: boolean = false;
}
