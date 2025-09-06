import { Component, output } from '@angular/core';
import { pagination } from './pagination.model';
import { CommonModule } from '@angular/common';
// import { EducationComponent } from '../education/education.component';
// import { DropdownMenuComponent } from '../../low-level-components/dropdown-menu/dropdown-menu.component';
import { Dropdown } from '../../low-level-components/dropdown-menu/dropdown.model';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  perpageOptions: Dropdown = {
    title: 'items per page',
    id: '548d',
    options: [
      { title: '7 items', id: 7 },
      { title: '10 items', id: 10 },
      { title: '15 items', id: 15 },
    ],
  };
  visiblePages: (number | '...')[] = [];
  changePage = output<number>();
  pagin: pagination = {
    currentPage: 1,
    recordsPerPage: 7,
    totalRecords: 20,
    neighbors: 2,
  };
  // get the previous page by call this method .
  prevPage() {
    if (this.pagin.currentPage > 1) {
      this.pagin.currentPage--;
    }
  }
  // get the next page by call this method .
  nextPage() {
    if (this.pagin.currentPage < this.pagin.totalRecords) {
      this.pagin.currentPage++;
    }
  }

  onChangePage(currentPage: number) {
    this.pagin.currentPage = currentPage;
    this.changePage.emit(this.pagin.currentPage);
  }

  // Calculate total pages based on recordsPerPage and totalRecords
  get totalPages(): number[] {
    return Array.from({
      length: Math.ceil(this.pagin.totalRecords / this.pagin.recordsPerPage),
    });
  }
  // get pages(): (number | '...')[] {
  //   const { currentPage, recordsPerPage, totalRecords } = this.pagin;
  //   const totalPages = Math.ceil(totalRecords / recordsPerPage);
  //   const neighbors = 2; // عدد الصفحات القريبة

  //   if (totalPages <= 7) {
  //     return Array.from({ length: totalPages }, (_, i) => i + 1);
  //   }

  //   const visiblePages: (number | '...')[] = [];

  //   visiblePages.push(1);

  //   if (currentPage > neighbors + 2) {
  //     visiblePages.push('...');
  //   }

  //   for (
  //     let i = Math.max(2, currentPage - neighbors);
  //     i <= Math.min(totalPages - 1, currentPage + neighbors);
  //     i++
  //   ) {
  //     visiblePages.push(i);
  //   }

  //   if (currentPage < totalPages - (neighbors + 1)) {
  //     visiblePages.push('...');
  //   }

  //   visiblePages.push(totalPages);

  //   return visiblePages;
  // }
}
