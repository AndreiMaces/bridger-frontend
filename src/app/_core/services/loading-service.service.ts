import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingServiceService {
  private _isLoadingValue: boolean;
  private _isLoading: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  public isLoading$: Observable<boolean> = this._isLoading.asObservable();

  setLoader(val: boolean): void {
    this._isLoading.next(val);
  }

  constructor() {}
}
