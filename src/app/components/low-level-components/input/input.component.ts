import { Component, input, output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-input',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  control = input<FormControl>(new FormControl('', [Validators.required]));
  dataEntered = output<any>();
  onkeyUp(data: any) {
    this.dataEntered.emit(data);
  }
  input = input.required<{ title: string; pleceholder: number | string }>();
}

// we have to spread between the input we use to search and the  normal input we are using
