import { Component, Input } from '@angular/core';
import { STATE } from 'src/app/emuns/state.enum';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() maxPage: number = 1;
  @Input() state: STATE = STATE.LOADING;

  page: number = 1;

  constructor(private filterService: FilterService) {
    //This is because when you change the year I reset the page
    this.filterService.currentFilter.subscribe(({ page }) => {
      this.page = page + 1;
    });
  }

  handleDecrement() {
    if (
      this.page == 1 ||
      this.state == STATE.LOADING ||
      this.state == STATE.ERROR
    )
      return;

    --this.page;

    this.filterService.setCurrentFilter((lastFilter) => ({
      ...lastFilter,
      page: this.page - 1,
    }));
  }

  handleIncrement() {
    if (
      this.page == this.maxPage ||
      this.state == STATE.LOADING ||
      this.state == STATE.ERROR
    )
      return;

    ++this.page;

    this.filterService.setCurrentFilter((lastFilter) => ({
      ...lastFilter,
      page: this.page - 1,
    }));
  }
}
// @Component({
//   selector: 'app-pagination',
//   templateUrl: './pagination.component.html',
//   styleUrls: ['./pagination.component.css'],
// })
// export class PaginationComponent {
//   @Input() listLength: number = 0;
//   @Input() empty: boolean = false;

//   maxSafeInteger = Number.MAX_SAFE_INTEGER;

//   maxPage: number = this.maxSafeInteger;

//   page: number = 1;

//   constructor(private filterService: FilterService) {
//     this.filterService.currentFilter.subscribe(({ page }) => {
//       this.page = page;
//     });
//   }

//   //No total items on the endpoint, this just try to handle pagination without knowing the total items
//   //This needs a hard fix using the total items
//   ngOnChanges(changes: SimpleChanges) {
//     //To reset the maxPage when going from an empty list to a full list
//     if (
//       changes['listLength'].currentValue > 0 &&
//       this.listLength == environment.ITEM_LIMIT_PER_PAGE
//     ) {
//       this.maxPage = this.maxSafeInteger;
//     }
//     //If the page has less than the item limit per page then is the last page
//     if (
//       changes['listLength'].currentValue > 0 &&
//       this.listLength < environment.ITEM_LIMIT_PER_PAGE
//     ) {
//       this.maxPage = this.page;
//     }
//     //This is to prevent the user from going too far away and get lost in the infinite nothingness
//     //Because it will cross a boundary that i don't handle since it has a lot of logic
//     if (
//       changes['listLength'].currentValue == 0 &&
//       changes['listLength'].previousValue > 0 &&
//       this.page > 1
//     ) {
//       --this.page;

//       //This also generates an error in angular
//       this.filterService.setCurrentFilter({
//         ...this.filterService.getCurrentFilter(),
//         page: this.page,
//       });
//       this.maxPage = this.page;
//     }
//   }
//   //Don't really like this but it's what i had to do to make it work
//   handleChange(type: string) {
//     if (this.empty) return;
//     if (type == 'INCREMENT' && this.page == this.maxPage) return;
//     if (type == 'DECREMENT' && this.page == 1) return;
//     if (type == 'DECREMENT') --this.page;
//     if (this.page == 1) this.maxPage = this.maxSafeInteger;
//     if (type == 'INCREMENT') ++this.page;

//     this.filterService.setCurrentFilter({
//       ...this.filterService.getCurrentFilter(),
//       page: this.page,
//     });
//   }
// }
