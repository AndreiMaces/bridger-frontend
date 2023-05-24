import { Component, OnInit } from '@angular/core';
import { LabelType } from '../../../_core/enums/LabelType';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminAccountInviteRequestDTO } from '../../../_core/DTOs/AdminAccountInviteRequestDTO';
import { AdminAccountControllerService } from '../../../_core/api/admin-account-controller.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-invite-user-modal',
  templateUrl: './invite-user-modal.component.html',
  styleUrls: ['./invite-user-modal.component.scss'],
  providers: [MatSnackBar],
})
export class InviteUserModalComponent implements OnInit {
  labelType = LabelType;
  form: FormGroup;
  isLoading = false;

  constructor(
    private adminAccountController: AdminAccountControllerService,
    private dialogRef: MatDialogRef<InviteUserModalComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get name(): FormControl {
    return this.form.controls['name'] as FormControl;
  }

  get email(): FormControl {
    return this.form.controls['email'] as FormControl;
  }

  onSubmit(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    if (this.form.valid) {
      this.isLoading = true;
      this.adminAccountController.invite(this.createPayload()).subscribe({
        next: () => {
          this.isLoading = false;
          this.dialogRef.close();
        },
        error: (error) => {
          this.isLoading = false;
          this.snackBar.open(error.error[0], 'Undo', {
            duration: 3000,
          });
        },
      });
    }
  }

  createPayload(): AdminAccountInviteRequestDTO {
    return {
      username: this.form.value.name,
      email: this.form.value.email,
    } as AdminAccountInviteRequestDTO;
  }
}
