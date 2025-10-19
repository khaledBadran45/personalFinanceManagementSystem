import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../low-level-components/container/container.component';
import { ButtonPopUpComponent } from '../../features-components/button-pop-up/button-pop-up.component';
import { PotCardComponent } from './pot-card/pot-card.component';
import { PotsService } from './pots.service';
import { CommonModule } from '@angular/common';
import { PopUPComponent } from "../../features-components/pop-up/pop-up.component";
import { PotFormComponent } from "./pot-form/pot-form.component";

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
  potService = inject(PotsService);
  popUpVisibililty=false;
  getPots() {
    return this.potService.potsList$;
  }
}
