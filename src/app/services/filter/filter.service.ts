import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Filter, SetFilterProps } from './filter.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private currentFilterSubject: BehaviorSubject<Filter> = new BehaviorSubject({
    year: 'All',
    page: 0,
  });

  public readonly currentFilter: Observable<Filter> =
    this.currentFilterSubject.asObservable();

  setCurrentFilter(filterCallback: SetFilterProps) {
    this.currentFilterSubject.next({
      ...filterCallback(this.currentFilterSubject.getValue()),
    });
  }
}
