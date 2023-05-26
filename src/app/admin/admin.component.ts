import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../_core/services/screen.service';
import { UserService } from '../_core/services/user.service';
import { User } from '../_core/models/user';
import { Router } from '@angular/router';
import { LoadingServiceService } from '../_core/services/loading-service.service';
import { Socket } from 'socket.io-client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isOnMobile: boolean;
  currentUser: User;
  isLoadingUser = true;
  isLoadingContent = false;
  socket: Socket;

  constructor(
    private screenService: ScreenService,
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingServiceService
  ) {}

  ngOnInit(): void {
    this.loadUser();
    this.subscribeLoader();
  }

  loadUser(): void {
    this.isLoadingUser = true;
    this.userService.currentUser$.subscribe({
      next: (res) => {
        this.currentUser = res;
        this.isLoadingUser = false;
      },
    });
  }

  subscribeLoader(): void {
    this.loadingService.isLoading$.subscribe({
      next: (val) => {
        this.isLoadingContent = val;
      },
    });
  }

  logout(): void {
    this.userService.logOutUser();
    this.router.navigateByUrl('/auth/login');
  }
}
