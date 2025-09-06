import { createReducer, on } from '@ngrx/store';
import { InitialSidebarState } from '../store/sidebar.state';
import { toggleSidebar } from '../actions/sidebar.actions';

export const sidebarReducer = createReducer(
  InitialSidebarState,
  on(toggleSidebar, (state) => {
    console.log('wroks',state);
    return { ...state, isMinimized: !state.isMinimized };
  })
);
