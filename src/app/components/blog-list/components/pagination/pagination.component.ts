import { Component, Input, SimpleChanges } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() listLength!: number;
  @Input() empty!: boolean;

  maxSafeInteger = Number.MAX_SAFE_INTEGER;

  maxPage: number = this.maxSafeInteger;

  page: number = 1;

  constructor(private filterService: FilterService) {
    this.filterService.currentFilter.subscribe(({ page }) => {
      this.page = page;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['listLength'].currentValue > 0 &&
      this.listLength == environment.API_LIMIT
    ) {
      this.maxPage = this.maxSafeInteger;
    }
    if (
      changes['listLength'].currentValue > 0 &&
      this.listLength < environment.API_LIMIT
    ) {
      this.maxPage = this.page;
    }
    if (
      changes['listLength'].currentValue == 0 &&
      changes['listLength'].previousValue > 0 &&
      this.page > 1
    ) {
      --this.page;
      this.filterService.setCurrentFilter({
        ...this.filterService.getCurrentFilter(),
        page: this.page,
      });
      this.maxPage = this.page;
    }
  }

  handleChange(type: string) {
    if (this.empty) return;
    if (type == 'INCREMENT' && this.page == this.maxPage) return;
    if (type == 'DECREMENT' && this.page == 1) return;
    if (type == 'DECREMENT') --this.page;
    if (this.page == 1) this.maxPage = this.maxSafeInteger;
    if (type == 'INCREMENT') ++this.page;

    this.filterService.setCurrentFilter({
      ...this.filterService.getCurrentFilter(),
      page: this.page,
    });
  }
}
