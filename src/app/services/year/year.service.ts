import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YearService {
  private currentYearSubject: BehaviorSubject<string> = new BehaviorSubject(
    'All'
  );

  public readonly currentYear: Observable<string> =
    this.currentYearSubject.asObservable();

  setCurrentYear(year: string) {
    this.currentYearSubject.next(year);
  }
}
