import { Injectable } from '@angular/core';
import StorageHelper from '../helpers/storage.helper';
import { User } from '../models/user';
import { Observable, ReplaySubject } from 'rxjs';
import { AccountLoginResponseDTO } from '../DTOs/AccountLoginResponseDTO';
import { UserControllerService } from '../api/user-controller.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _userDetails: User;
  private _currentUser: ReplaySubject<User> = new ReplaySubject<User>(1);
  public currentUser$: Observable<User> = this._currentUser.asObservable();
  private _isLoggedIn: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  public isLoggedIn$: Observable<boolean> = this._isLoggedIn.asObservable();

  constructor(private userController: UserControllerService) {}

  logInUser(token: AccountLoginResponseDTO): void {
    StorageHelper.saveToken(token.token);
    StorageHelper.saveId(token.user.id);
    this.setCurrentUser();
  }

  logOutUser(): void {
    StorageHelper.deleteToken();
    StorageHelper.deleteId();
    this._currentUser.next(null);
    this._isLoggedIn.next(false);
  }

  setCurrentUser(): void {
    if (StorageHelper.getToken()) {
      this.userController
        .getById(StorageHelper.getId())
        .subscribe((response) => {
          this._userDetails = new User(response);
          this._currentUser.next(this._userDetails);
        });
      this._isLoggedIn.next(true);
    } else this._isLoggedIn.next(false);
  }

  updateUserImage(profileImageUrl: string): void {
    this._userDetails.avatar = profileImageUrl;
    this._currentUser.next(this._userDetails);
  }
}
