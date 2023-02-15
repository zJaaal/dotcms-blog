import { Component, Input, SimpleChanges } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() listLength: number = 0;
  @Input() empty: boolean = false;

  maxSafeInteger = Number.MAX_SAFE_INTEGER;

  maxPage: number = this.maxSafeInteger;

  page: number = 1;

  constructor(private filterService: FilterService) {
    this.filterService.currentFilter.subscribe(({ page }) => {
      this.page = page;
    });
  }

  //No total items on the endpoint, this just try to handle pagination without knowing the total items
  //This needs a hard fix using the total items
  ngOnChanges(changes: SimpleChanges) {
    //To reset the maxPage when going from an empty list to a full list
    if (
      changes['listLength'].currentValue > 0 &&
      this.listLength == environment.ITEM_LIMIT_PER_PAGE
    ) {
      this.maxPage = this.maxSafeInteger;
    }
    //If the page has less than the item limit per page then is the last page
    if (
      changes['listLength'].currentValue > 0 &&
      this.listLength < environment.ITEM_LIMIT_PER_PAGE
    ) {
      this.maxPage = this.page;
    }
    //This is to prevent the user from going too far away and get lost in the infinite nothingness
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
