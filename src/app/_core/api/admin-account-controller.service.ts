import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { AdminAccountInviteRequestDTO } from '../DTOs/AdminAccountInviteRequestDTO';

@Injectable({
  providedIn: 'root',
})
export class AdminAccountControllerService {
  private readonly _resourceApi = '/AdminAccount';

  constructor(private apiService: ApiService) {}

  invite(body: AdminAccountInviteRequestDTO): Observable<boolean> {
    return this.apiService.post(`${this._resourceApi}/invite`, body);
  }

  resendInvite(userId: string): Observable<boolean> {
    return this.apiService.post(`${this._resourceApi}/resend-invite/${userId}`);
  }

  deleteUser(userId: string): Observable<boolean> {
    return this.apiService.delete(`${this._resourceApi}/${userId}`);
  }
}
