import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pot } from './pot-model';

@Injectable({
  providedIn: 'root',
})
export class PotsService {
  private PotsSubject = new BehaviorSubject<pot[]>([]);
  potsList$ = this.PotsSubject.asObservable();
  constructor() {}
  addPot(pot: pot) {
    this.PotsSubject.next([...this.PotsSubject.getValue(), pot]);
  }
  // here u can just create a new Pot . 
  
}
