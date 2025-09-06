import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-card-item',
    imports: [RouterLink],
    templateUrl: './card-item.component.html',
    styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
@Input() link:string='';
}
