import { Injectable } from '@angular/core';
import { Transaction } from './transactions.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { dummyTranscations } from './dummy_transcations';
@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  src: Transaction[] = dummyTranscations;
  private transcationsSubject = new BehaviorSubject<Transaction[]>([]);
  transactionsList$: Observable<Transaction[]> =
    this.transcationsSubject.asObservable();

  constructor() {
    // const randomNumber= Math.floor(Math.random() * 10 );
    //  console.log(randomNumber);
  }
  // getTransaction the user search about the transcations By Name
  getTransaction(searchkeys: string) {
    let searchResults: any[] = [];
    // search about the transactions and in the dummy array database ;
    dummyTranscations.filter(
      (tr) =>
        tr.sender.toLowerCase().includes(searchkeys.toLowerCase()) &&
        searchResults.push(tr)
    );
    // if there is results add it to the data stream
    if (searchResults.length) {
      this.transcationsSubject.next(searchResults);
    } else {
      // if not make the data stream empty;
      this.transcationsSubject.next([]);
    }
  }
  getTransactionsByCategory(budgetTitle: string) {
    // let searchResults: any[] = [];
    // search about the transactions and in the dummy array database ;

    // console.log();
    return dummyTranscations.filter((tr) => tr.category == budgetTitle);
  }
  getDefultTransactions() {
    this.transcationsSubject.next(dummyTranscations);
  }
  // sortBY the user going to sort the Transactions asc or desc or latest or oldest or alphabitically ;
  sortBY(
    sortType: 'asc' | 'desc' = 'asc',
    key: 'date' | 'amount' | 'alpa' = 'date'
  ) {
    if (sortType == 'asc') {
      // here we use this block of code for sorting By oldest or lowest mean ascending ;
      // console.log(sortType,key);
      this.transcationsSubject.next([
        ...this.transcationsSubject.getValue().sort((a: any, b: any) => {
          return a[key] - b[key];
        }),
      ]);
    } else {
      // here we use this block of code for sorting By latest or heigst mean descending ;
      this.transcationsSubject.next([
        ...this.transcationsSubject
          .getValue()
          .sort((a: any, b: any) => b[key] - a[key]),
      ]);
    }
  }

  sortAlpha(sortType: 'asc' | 'desc' = 'asc') {
    if (sortType == 'asc') {
      // here we use this block of code for sorting By oldest or lowest mean ascending ;
      this.transcationsSubject.next([
        ...this.transcationsSubject
          .getValue()
          .sort((a: any, b: any) => a.sender.localeCompare(b.sender)),
      ]);
    } else {
      // here we use this block of code for sorting By latest or heigst mean descending ;
      this.transcationsSubject.next([
        ...this.transcationsSubject
          .getValue()
          .sort((a: any, b: any) => b.sender.localeCompare(a.sender)),
      ]);
    }
  }

  // return the list of Transactions that accept a specific category ;
  getItemsByCategory(option: string) {
    if (option == 'all transactions') {
      this.getList(1);
    } else {
      this.transcationsSubject.next(
        [...dummyTranscations].filter((x) => x.category == option.toLowerCase())
      );
    }
  }

  // get a list of items debending on the amount that effect by the per page :param .
  getList(currentPage: number = 1) {
    let start = currentPage;
    let next = start * 10;
    if (currentPage == 1) {
      this.transcationsSubject.next(...[dummyTranscations.slice(0, 10)]);
    } else if (currentPage == 2) {
      this.transcationsSubject.next(...[dummyTranscations.slice(10, 20)]);
    } else if (currentPage == 3) {
      this.transcationsSubject.next(
        ...[dummyTranscations.slice(20, dummyTranscations.length - 1)]
      );
    }
  }
  
}
/*
 * when user change the count of needed items per page we need to configure the src of the these items
 * to have :
 * 1) format of the page {currentPage:number,pageData:transactions[], itemsPerPage:number} ;
 * 2) need a method to configuer and create array of the object based on the per page property
 * 3) configuer src
 */
