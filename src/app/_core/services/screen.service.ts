import { Injectable } from '@angular/core';
import { fromEvent, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  _screenWidth = new ReplaySubject<number>(window.innerWidth);
  screenWidth$ = this._screenWidth.asObservable();
  resizeObservable: Observable<Event>;

  constructor() {
    this.resizeObservable = fromEvent(window, 'resize');
    this.resizeObservable.subscribe({
      next: () => {
        this._screenWidth.next(window.innerWidth);
      },
    });
  }
}
