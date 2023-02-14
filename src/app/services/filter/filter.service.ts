import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Filter } from './filter.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private currentFilterSubject: BehaviorSubject<Filter> = new BehaviorSubject({
    year: 'All',
    page: 1,
  });

  public readonly currentFilter: Observable<Filter> =
    this.currentFilterSubject.asObservable();

  setCurrentFilter(Filter: Filter) {
    this.currentFilterSubject.next(Filter);
  }
  getCurrentFilter() {
    return this.currentFilterSubject.getValue();
  }
}
