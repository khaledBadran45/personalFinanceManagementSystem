import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink, RouterLinkActive, CommonModule],
    animations: [
        trigger('inOut', [
            state('in', style({
                opacity: 1, // Fully visible when in the 'in' state
            })),
            state('out', style({
                opacity: 0, // Hidden when in the 'out' state
                display: 'none'
            })),
            transition('in <=> out', [
                animate('0.3s ease-in'), // Animation from 'in' to 'out'
            ]),
        ]),
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  // active_link_class:string=''
  prop:boolean = false;
  // store = inject(Store<appState>);
  // isMinimized$ = this.store.select('sidebar');
  minimzeMenu() {
    // this.store.dispatch(toggleSidebar());
  }
}

/***
 * [@inOut]="(isMinimized$ | async)?.isMinimized ? 'in' : 'out'"
*/