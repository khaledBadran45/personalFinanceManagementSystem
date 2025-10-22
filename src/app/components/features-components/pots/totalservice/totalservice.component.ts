import { Component, inject, OnInit, signal } from '@angular/core';
import { take } from 'rxjs';
import { PotsService } from '../../../high-level-components/pots/pots.service';

@Component({
    selector: 'app-totalservice',
    imports: [],
    templateUrl: './totalservice.component.html',
    styleUrl: './totalservice.component.scss'
})
export class TotalserviceComponent implements OnInit {
    ngOnInit(): void {
        this.calcTotalSavedInPots()

    }
    num=signal(0);
    potsService = inject(PotsService);
     calcTotalSavedInPots():void {
        // How to get the current Value Of A Behavior Subject
        this.potsService.potsList$.pipe(take(1)).subscribe((pots) => {
          this.num.set(pots.reduce((acc, pot) => acc + pot.saved, 0));
        });
    }
}
