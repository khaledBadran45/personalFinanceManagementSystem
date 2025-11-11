import { Component, input, output, signal } from '@angular/core';
import { CardTitleComponent } from '../../../features-components/budget-card/card-title/card-title.component';
import { pot } from '../pot-model';
import { PopUPComponent } from "../../../features-components/pop-up/pop-up.component";
import { UpdatePotComponent } from "../update-pot/update-pot.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pot-card',
  imports: [CardTitleComponent,CommonModule, PopUPComponent, UpdatePotComponent],
  templateUrl: './pot-card.component.html',
  styleUrl: './pot-card.component.scss',
})
export class PotCardComponent {
  pot = input.required<pot>();
  edit = output<pot>();
  remove = output<pot>();
  
  isPopUpVisible: boolean = false;
  title: string = '';
  transactionType = signal<'add' | 'withdraw'>('add');
  potManipulation = false;
  addMoney() {
    this.transactionType.set('add');
    // Logic to add money to the pot
    this.isPopUpVisible = true;
    this.title = `Add to '${this.pot().name}'`;
  }
  withdraw() {
    this.transactionType.set('withdraw');
    this.isPopUpVisible = true;
    this.title = `Withdraw from '${this.pot().name}'`;
    // Logic to withdraw money from the pot
  }
  cardManipulation(){
    this.potManipulation = !this.potManipulation;
  }
  deleteItem() {
    this.remove.emit(this.pot());
  }
  editItem() {
    this.edit.emit(this.pot());
  }
}
