import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  years: string[] = ['All', '2021', '2020', '2019'];
  constructor(private filterService: FilterService) {}

  handleYearChange({ target }: Event) {
    this.filterService.setCurrentFilter({
      page: 0,
      year: (target as HTMLSelectElement).value,
    });
  }
}
