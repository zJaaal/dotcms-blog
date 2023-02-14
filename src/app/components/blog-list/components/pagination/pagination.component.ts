import { Component, Input } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() listLength!: number;

  private maxPage: number = Number.MAX_SAFE_INTEGER;

  page: number = 1;

  constructor(private filterService: FilterService) {
    this.filterService.currentFilter.subscribe(({ page }) => {
      this.page = page;
    });
  }

  handleChange(type: string) {
    if (this.page == 1) this.maxPage = Number.MAX_SAFE_INTEGER;
    if (this.listLength < 4) this.maxPage = this.page;
    if (type == 'DECREMENT' && this.page == 1) return;
    if (type == 'INCREMENT' && this.page == this.maxPage) return;
    if (type == 'DECREMENT') --this.page;
    if (type == 'INCREMENT') ++this.page;

    this.filterService.setCurrentFilter({
      ...this.filterService.getCurrentFilter(),
      page: this.page,
    });
  }
}
