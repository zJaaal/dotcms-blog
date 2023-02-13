import { Component } from '@angular/core';
import { YearService } from 'src/app/services/year/year.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  years: string[] = ['All', '2019', '2020', '2021'];
  constructor(private yearService: YearService) {}

  handleYearChange({ target }: Event) {
    this.yearService.setCurrentYear((target as HTMLSelectElement).value);
  }
}
