import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  years: string[] = ['All', '2019', '2020', '2021'];
  constructor(private filterService: FilterService) {}

  handleYearChange({ target }: Event) {
    this.filterService.setCurrentFilter({
      page: 1,
      year: (target as HTMLSelectElement).value,
    });
  }
}
