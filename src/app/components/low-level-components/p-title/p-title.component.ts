import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-p-title',
    imports: [],
    templateUrl: './p-title.component.html',
    styleUrl: './p-title.component.scss'
})
export class PTitleComponent {
  @Input({required:true}) title?:string ;
}
