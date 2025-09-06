import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit, output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Dropdown, Option } from './dropdown.model';

@Component({
  selector: 'app-dropdown-menu',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent implements OnInit {
  @Input() control: FormControl = new FormControl('', [Validators.required]);

  // when we assign the dropdown to dropdown model we have a problim .
  dropdown = input.required<Dropdown | any>();

  // taking an array of string for the used options .
  @Input() usedOptions: any[] = [];

  // using the available options to choose a default one . with every add a new item we should pass a new available options
  @Input() availableOptions: Option[] = [];

  @Input() comparingKey: string = '';

  ngOnInit(): void {
    this.control.setValue(this.availableOptions[0]);
  }
  isOptionUsed(optionTitle: string) {
    return this.usedOptions.find(
      (x) => x[this.comparingKey].title == optionTitle
    ); // can use the option paramter instead . and returning => true .
  }
  isSelected(option: string): boolean {
    return this.control.value === option;
  }

  selectOption(option: any, isEdit: boolean = false): void {
    if (isEdit) {
      this.control.setValue(option);
    } else {
      // if option not used befor please select .
      !this.isOptionUsed(option.title) && this.control.setValue(option);
      document.getElementById('select-' + this.dropdown().id)?.click(); // Close the dropdown after selection;
    }
  }

  markAsTouched() {
    if (this.control) this.control.markAsTouched();
  }
}