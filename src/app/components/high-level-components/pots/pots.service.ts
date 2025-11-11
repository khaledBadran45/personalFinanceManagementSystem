import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pot } from './pot-model';

@Injectable({
  providedIn: 'root',
})
export class PotsService {
  private PotsSubject = new BehaviorSubject<pot[]>([]);
  potsList$ = this.PotsSubject.asObservable();
  constructor() {
    const storedPots = localStorage.getItem('pots');
    if (storedPots) {
      this.PotsSubject.next(JSON.parse(storedPots));
    }
  }

  addPot(pot: pot) {
    localStorage.setItem('pots', JSON.stringify([...this.PotsSubject.getValue(), pot]));
    this.PotsSubject.next([...this.PotsSubject.getValue(), pot]);
  }
  addNewAmountToPot(title: string, newAmount: number, currentAmountPercentage: string) {
    const pots = this.PotsSubject.getValue();
    const pot = pots.filter((p) => p.name === title)[0];
    console.log(pot);
    if (title && pot) {
      pot.saved = newAmount;
      pot.savedPercentage = `${(pot.saved / Number(pot.target) * 100).toFixed(1)}%`;
      const updatedPots = pots.map((p) => p.name === title ? pot : p);
      localStorage.setItem('pots', JSON.stringify(updatedPots));
      this.PotsSubject.next(updatedPots);
    }
  }
  deletePot(pot: pot) {
    console.log('Delete Pot FromThe Service pot');
    const updatedPots = this.PotsSubject.getValue().filter((p) => p.name !== pot.name);
    localStorage.setItem('pots', JSON.stringify(updatedPots));
    this.PotsSubject.next(updatedPots);
  }
  editPot(updatedPot: pot) {    
    const pots = this.PotsSubject.getValue();
    const updatedPots = pots.map((p) => p.name === updatedPot.name ? updatedPot : p);
    localStorage.setItem('pots', JSON.stringify(updatedPots));
    this.PotsSubject.next(updatedPots);
  }

}
