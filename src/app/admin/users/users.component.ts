import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteUserModalComponent } from './invite-user-modal/invite-user-modal.component';
import { FormControl } from '@angular/forms';
import { User } from '../../_core/models/user';
import { UserControllerService } from '../../_core/api/user-controller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAccountControllerService } from '../../_core/api/admin-account-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [MatSnackBar],
})
export class UsersComponent implements OnInit {
  users: User[];
  filteredUsers: User[];
  isLoading = false;
  filterParam: string = null; // on line 51 params['filter'] can be empty string
  searchParam: string = null;

  searchValue: FormControl = new FormControl<string>('');

  constructor(
    private dialog: MatDialog,
    private userController: UserControllerService,
    private adminAccountController: AdminAccountControllerService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.syncSearchInputWithQueryParam();
    this.subscribeQueryParams();
  }

  syncSearchInputWithQueryParam(): void {
    this.searchValue.valueChanges.subscribe((value: string) => {
      this.router.navigate([], {
        queryParams: {
          search: value,
        },
        queryParamsHandling: 'merge',
      });
    });
    this.searchValue.setValue(this.route.snapshot.queryParams['search']);
  }

  subscribeQueryParams(): void {
    this.route.queryParams.subscribe({
      next: (params) => {
        if (params['filter'] !== this.filterParam) {
          this.isLoading = true;
          this.renderCategory(params['filter']);
        }
        if (params['search'] !== this.searchParam) {
          this.filterUsers(params['search']);
          this.searchParam = params['search'];
        }
      },
    });
  }

  renderCategory(filter: string): void {
    this.isLoading = true;
    if (filter === 'admins') this.getAdmins();
    else if (filter === 'pending') this.getPending();
    else if (!filter) this.getAllUsers();
    this.filterParam = filter;
  }

  getAllUsers(): void {
    this.userController.pending().subscribe({
      next: (response) => {
        this.users = response.map((user) => new User(user, true));
        this.userController.getAll().subscribe({
          next: (response) => {
            this.users.push(...response.map((user) => new User(user)));
            this.sortUsers();
            this.filterUsers(this.searchParam);
            this.isLoading = false;
          },
        });
      },
    });
  }

  getAdmins(): void {
    this.userController.getAll().subscribe({
      next: (response) => {
        this.users = response.map((user) => new User(user));
        this.sortUsers();
        this.filterUsers(this.searchParam);
        this.isLoading = false;
      },
    });
  }

  getPending(): void {
    this.userController.pending().subscribe({
      next: (response) => {
        this.users = response.map((user) => new User(user, true));
        this.sortUsers();
        this.filterUsers(this.searchParam);
        this.isLoading = false;
      },
    });
  }

  sortUsers(): void {
    this.users.sort((u1, u2) =>
      u1.username.toUpperCase() <= u2.username.toUpperCase() ? -1 : 1
    );
  }

  filterUsers(value = ''): void {
    this.filteredUsers = this?.users?.filter((user) =>
      user.username.toUpperCase().includes(value.toUpperCase())
    );
  }

  deleteUser(userId: string): void {
    this.isLoading = true;
    this.adminAccountController.deleteUser(userId).subscribe({
      next: () => {
        this.filteredUsers = this.filteredUsers.filter(
          (user) => user.id !== userId
        );
        this.isLoading = false;
      },
      error: () => {
        this.snackBar.open('Something went wrong.', 'Close', {
          duration: 3000,
        });
        this.isLoading = false;
      },
    });
  }

  openDeleteUserModal(userId: string): void {
    this.dialog.open(DeleteUserModalComponent, {
      width: '55rem',
      height: 'auto',
      data: {
        userId: userId,
      },
    });
  }

  openDialog(): void {
    this.dialog.open(InviteUserModalComponent, {
      width: '55rem',
      height: 'auto',
    });
    const dialogSubscription = this.dialog.afterAllClosed.subscribe(() => {
      this.renderCategory(this.filterParam);
      dialogSubscription.unsubscribe();
    });
  }
}
