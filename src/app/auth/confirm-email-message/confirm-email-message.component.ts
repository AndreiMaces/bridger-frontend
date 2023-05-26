import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthControllerService } from '../../_core/api/auth-controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-email-message',
  templateUrl: './confirm-email-message.component.html',
  styleUrls: ['./confirm-email-message.component.scss'],
})
export class ConfirmEmailMessageComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private authController: AuthControllerService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value.email);
      this.authController
        .resendEmailConfirmation({
          email: this.form.value.email,
        })
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/auth/login');
          },
        });
    }
  }
}
