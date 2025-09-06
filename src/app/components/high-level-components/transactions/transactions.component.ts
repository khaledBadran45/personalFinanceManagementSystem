import { Component, inject, OnInit } from '@angular/core';
import { ContainerComponent } from '../../low-level-components/container/container.component';
import { InputComponent } from '../../low-level-components/input/input.component';
import { DropdownMenuComponent } from '../../low-level-components/dropdown-menu/dropdown-menu.component';
import { TransactionsService } from './transactions.service';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../features-components/pagination/pagination.component';
import { pagination } from '../../features-components/pagination/pagination.model';
import { TransactionsMenuComponent } from '../../low-level-components/transactions-menu/transactions-menu.component';
import { TransactionsListComponent } from "../../features-components/transactions-list/transactions-list.component";
@Component({
  selector: 'app-transactions',
  imports: [
    ContainerComponent,
    InputComponent,
    CommonModule,
    PaginationComponent,
    TransactionsMenuComponent,
    TransactionsListComponent
],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  ngOnInit(): void {
    // this.onChangePage();
    this._transactionsService.getList(1);
    // this._transactionsService.configSrc(5);
  }
  _transactionsService = inject(TransactionsService);

  sortByOptions = [
    { title: 'latest', id: 'newd4' },
    { title: 'oldest', id: 'dsds' },
    { title: 'A to Z', id: 'atoz' },
    { title: 'Z to A', id: 'ztoa' },
    { title: 'higest', id: 'h2s' },
    { title: 'lowest', id: 'low87d' },
  ];
  categOptions = [
    { title: 'all transactions', id: '325' },
    { title: 'entertainment', id: '12' },
    { title: 'bills', id: 'atoz' },
    { title: 'grociera', id: 'ztoa' },
    { title: 'dinning out', id: 'h2s' },
    { title: 'transportation', id: 'low87d' },
    { title: 'personal care', id: 'caews' },
    { title: 'education', id: 'hsas' },
    { title: 'life style', id: 'loSas87d' },
    { title: 'shopping', id: 'hsas' },
    { title: 'genral', id: 'loSas87d' },
  ];
  onChangePage(currentPage: number = 1) {
    this._transactionsService.getList(currentPage);
    // console.log(currentPage, itemsPerPage);
  }
  onDataEntered(data: string) {
    if (data) {
      this._transactionsService.getTransaction(data);
    } else {
      this._transactionsService.getDefultTransactions();
    }
  }
  getTransactionList() {
      return this._transactionsService.transactionsList$;
  }
  get randomNumber() {
    return Math.floor(Math.random() * 8);
  }
  onSelectCattegOption(selectedOption: string) {
    this._transactionsService.getItemsByCategory(selectedOption);
  }
  onSelectSortingOption(event: string) {
    console.log('select sort',event);
    if (event == 'oldest') {
      this._transactionsService.sortBY();
    } else if (event == 'latest') {
      this._transactionsService.sortBY('desc');
    } else if (event == 'lowest') {
      this._transactionsService.sortBY('asc', 'amount');
    } else if (event == 'higest') {
      this._transactionsService.sortBY('desc', 'amount');
    } else if (event == 'A to Z') {
      // Sort alphabetically (A → Z)
      this._transactionsService.sortAlpha('asc');
    } else if (event == 'Z to A') {
      this._transactionsService.sortAlpha('desc');
      // Sort alphabetically (A → Z)
    }
  }
}
