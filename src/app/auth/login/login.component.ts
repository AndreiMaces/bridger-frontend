import { Component } from '@angular/core';
import { InputType } from '../../_core/enums/InputType';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthControllerService } from '../../_core/api/auth-controller.service';
import { AccountLoginRequestDTO } from '../../_core/DTOs/AccountLoginRequestDTO';
import { UserService } from '../../_core/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MatSnackBar],
})
export class LoginComponent {
  InputType = InputType;
  profileForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });
  isLoading = false;

  constructor(
    private accountController: AuthControllerService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    if (this.profileForm.valid) {
      this.isLoading = true;
      this.accountController.login(this.createPayload()).subscribe({
        next: (response) => {
          this.userService.logInUser(response);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          if (error.error.error === 'INVALID_CREDENTIALS') {
            this.snackBar.open('Invalid credentials.', 'Undo', {
              duration: 3000,
            });
          }

          if (error.error.error.includes('EMAIL_NOT_CONFIRMED'))
            this.snackBar.open('Email not confirmed', 'Undo', {
              duration: 3000,
            });
        },
      });
    }
  }

  createPayload(): AccountLoginRequestDTO {
    return {
      email: this.email.value,
      password: this.password.value,
    } as AccountLoginRequestDTO;
  }

  get email() {
    return this.profileForm.controls.email;
  }

  get password() {
    return this.profileForm.controls.password;
  }
}
