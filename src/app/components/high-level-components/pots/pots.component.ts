import { Component, inject, ViewChild } from '@angular/core';
import { ContainerComponent } from '../../low-level-components/container/container.component';
import { ButtonPopUpComponent } from '../../features-components/button-pop-up/button-pop-up.component';
import { PotCardComponent } from './pot-card/pot-card.component';
import { PotsService } from './pots.service';
import { CommonModule } from '@angular/common';
import { PopUPComponent } from "../../features-components/pop-up/pop-up.component";
import { PotFormComponent } from "./pot-form/pot-form.component";
import { pot } from './pot-model';

@Component({
  selector: 'app-pots',
  imports: [
    ContainerComponent,
    CommonModule,
    PotCardComponent,
    PopUPComponent,
    PotFormComponent
],
  templateUrl: './pots.component.html',
  styleUrl: './pots.component.scss',
})
export class PotsComponent {
  req: 'Add' | 'Edit' = 'Add';
  
  @ViewChild(PotFormComponent) potForm!: PotFormComponent;
  potService = inject(PotsService);
  popUpVisibililty=false;
  getPots() {
    return this.potService.potsList$;
  }

  onRemovePot(pot: pot) {
    // Implement remove logic here
    console.log('Remove pot:', pot);
    this.potService.deletePot(pot);
  }

  onEditPot(pot: pot) { 
    this.potService.editPot(pot);
    this.popUpVisibililty = true;
  }
  manipulateBudget(pot: pot, req: 'Edit') {
      this.req = req;
      this.popUpVisibililty = true;
      if (req === 'Edit') {
        setTimeout(() => {
          // this.EditingBudget = budget;
          // this.potForm.patchBudget(pot);
        }, 1);
      }
    }

}
