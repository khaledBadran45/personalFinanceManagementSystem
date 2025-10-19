import { Component, inject, output } from '@angular/core';
import { DropdownMenuComponent } from '../../../low-level-components/dropdown-menu/dropdown-menu.component';
import { FormsModule } from '@angular/forms';
import { Dropdown } from '../../../low-level-components/dropdown-menu/dropdown.model';
import { pot } from '../pot-model';
import { PotsService } from '../pots.service';

@Component({
  selector: 'app-pot-form',
  imports: [DropdownMenuComponent, FormsModule],
  templateUrl: './pot-form.component.html',
  styleUrl: './pot-form.component.scss',
})
export class PotFormComponent {
  potService = inject(PotsService)
  target!: string;
  close = output<boolean>()
  PotTitle!: string;
  selectedThemeColor: string = '#FF5733';
  themes: Dropdown = {
    title: 'Themes',
    options: [
      { id: '#FF5733', title: 'Sunset Orange' },
      { id: '#33FF57', title: 'Lime Green' },
      { id: '#3357FF', title: 'Ocean Blue' },
      { id: '#F1C40F', title: 'Golden Yellow' },
      { id: '#8E44AD', title: 'Royal Purple' },
      { id: '#E74C3C', title: 'Crimson Red' },
      { id: '#3498DB', title: 'Sky Blue' },
      { id: '#2ECC71', title: 'Emerald Green' },
      { id: '#1ABC9C', title: 'Aqua Teal' },
      { id: '#34495E', title: 'Steel Grey' },
    ],
    id: 'thColors',
  };
  onSelectThemeColor(themeColor: string) {
    console.log(themeColor);
    this.selectedThemeColor = themeColor;
  }
  submit() {
    let pot: pot = {
      name: this.PotTitle,
      target: this.target,
      theme: this.selectedThemeColor,
      saved: 0
    }
    if (this.PotTitle && this.target) {
      this.potService.addPot(pot)
      this.close.emit(true)
    }
  }
}
