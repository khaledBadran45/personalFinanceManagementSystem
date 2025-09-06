import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
// import { toggleSidebar } from './actions/sidebar.actions';
// import { appState } from './store/app.state';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/features-components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

// buttonModule
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SidebarComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal_financial';
  // store = inject(Store<appState>);
  // isMinimized$ = this.store.select('sidebar');
  minimzeMenu() {
    // this.store.dispatch(toggleSidebar());
  }
}
