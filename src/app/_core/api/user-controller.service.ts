import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserControllerService {
  private readonly _resourceApi = '/users';

  constructor(private apiService: ApiService) {}

  getAll(): Observable<IUser[]> {
    return this.apiService.get(`${this._resourceApi}`);
  }

  getById(userId: string): Observable<IUser> {
    return this.apiService.get(`${this._resourceApi}/${userId}`);
  }
}
