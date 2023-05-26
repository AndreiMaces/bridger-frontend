import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { AccountRegisterRequestDTO } from '../DTOs/AccountRegisterRequestDTO';
import { AccountLoginRequestDTO } from '../DTOs/AccountLoginRequestDTO';
import { AccountLoginResponseDTO } from '../DTOs/AccountLoginResponseDTO';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthControllerService {
  private readonly _resourceApi = '/auth';

  constructor(private apiService: ApiService) {}

  register(body: AccountRegisterRequestDTO): Observable<boolean> {
    return this.apiService.post(`${this._resourceApi}/register`, body);
  }

  login(body: AccountLoginRequestDTO): Observable<AccountLoginResponseDTO> {
    return this.apiService.post(`${this._resourceApi}/login`, body);
  }

  confirmEmail(token: string): Observable<User> {
    return this.apiService.get(`${this._resourceApi}/confirm-email/${token}`);
  }

  resendEmailConfirmation(body: { email: string }): Observable<any> {
    return this.apiService.post(
      `${this._resourceApi}/resend-email-confirmation`,
      body
    );
  }
}
