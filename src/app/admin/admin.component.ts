import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ScreenService } from '../_core/services/screen.service';
import { UserService } from '../_core/services/user.service';
import { User } from '../_core/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isOnMobile: boolean;
  currentUser: User;

  constructor(
    private screenService: ScreenService,
    private userService: UserService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe('(max-width: 1024px)')
      .subscribe((result) => {
        this.isOnMobile = result.matches;
      });
  }

  logout(): void {
    this.userService.logOutUser();
    this.router.navigateByUrl('/auth/login');
  }
}
