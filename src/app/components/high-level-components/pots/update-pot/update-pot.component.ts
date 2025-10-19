import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { PotsService } from '../pots.service';

@Component({
  selector: 'app-update-pot',
  imports: [],
  templateUrl: './update-pot.component.html',
  styleUrl: './update-pot.component.scss'
})
export class UpdatePotComponent implements OnInit {
  ngOnInit(): void {
    this.updatePercentage();
  }
  closePopUp = output();
  potsService = inject(PotsService);
  title = input.required<string>();
  amountToAdd = signal<number>(0);
  currentAmount = input<number>(0);
  newAmount = computed(() => this.currentAmount() + this.amountToAdd())
  currentAmountPercentage: string = '0.0%';
  amountToAddPercentage: string = '0.0%';
  newAmountPercentage: string = '0.0%';
  saved = input.required<number>();
  target = input.required<string>();
  updateAmount(value: string) {
    console.log(value);
    this.amountToAdd.set(Number(value));
    this.updatePercentage();
  }
  updatePercentage() {
    console.log('Update Percentage...');
    this.currentAmountPercentage = `${((this.currentAmount() / Number(this.target())) * 100).toFixed(1)}%`;
    this.amountToAddPercentage = `${((this.amountToAdd() / Number(this.target())) * 100).toFixed(1)}%`;

    this.newAmountPercentage = `${((this.newAmount() / Number(this.target())) * 100).toFixed(1)}%`;
  }
  confirmAddition() {
    // logic to confirm addition
    console.log('Confirming addition...');
    console.log('New Amount:', this.newAmount());
    console.log('Target:', this.target());
    this.potsService.addNewAmountToPot(this.title(), this.newAmount());
    this.closePopUp.emit();
    this.amountToAdd.set(0);
  }
}
/*

 new amount = current amount + amount to add 

*/