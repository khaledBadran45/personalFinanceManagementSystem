import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Dropdown } from '../dropdown-menu/dropdown.model';

@Component({
  selector: 'app-transactions-menu',
  imports: [CommonModule],
  templateUrl: './transactions-menu.component.html',
  styleUrl: './transactions-menu.component.scss',
})
export class TransactionsMenuComponent {
  select = output<string>();
  // when we assign the dropdown to dropdown model we have a problim .
  dropdown = input.required<Dropdown | any>();
  isSelected(optionTitle: string) {}
  selectOption(optionTitle: string): void {
    this.select.emit(optionTitle);
  }
  isOptionUsed(optionTitle: string) {}
}
