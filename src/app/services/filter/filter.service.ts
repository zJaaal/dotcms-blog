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

  /**
   * @description This function takes a callback that exposes the last filter so you can modify the data as you want
   * @param filterCallback
   */
  setCurrentFilter(filterCallback: SetFilterProps) {
    this.currentFilterSubject.next({
      ...filterCallback(this.currentFilterSubject.getValue()),
    });
  }
}
