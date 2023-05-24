import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../_core/models/user';
import { AdminAccountControllerService } from '../../../_core/api/admin-account-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
  providers: [MatSnackBar],
})
export class UserRowComponent {
  @Input() user: Partial<User>;
  resendInvitationLoading = false;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private adminAccountController: AdminAccountControllerService,
    private snackBar: MatSnackBar
  ) {}

  resendInvite(): void {
    this.resendInvitationLoading = true;
    this.adminAccountController.resendInvite(this.user.id).subscribe({
      next: () => {
        this.resendInvitationLoading = false;
        this.snackBar.open('Invitation sent!', 'Close', {
          duration: 3000,
        });
      },
    });
  }

  deleteSelf(): void {
    this.delete.emit(this.user.id);
  }
}
