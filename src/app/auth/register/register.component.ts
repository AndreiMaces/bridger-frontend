import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputType } from 'src/app/_core/enums/InputType';
import { AccountRegisterRequestDTO } from '../../_core/DTOs/AccountRegisterRequestDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthControllerService } from '../../_core/api/auth-controller.service';
import { LabelType } from '../../_core/enums/LabelType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  InputType = InputType;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  LabelType = LabelType;

  constructor(
    private route: ActivatedRoute,
    private accountController: AuthControllerService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.accountController.register(this.createPayload()).subscribe({
        next: () => {
          this.router.navigate(['/auth/login']);
        },
      });
    }
  }

  createPayload(): AccountRegisterRequestDTO {
    return {
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      password: this.profileForm.value.password,
    } as AccountRegisterRequestDTO;
  }

  get firstName(): FormControl {
    return this.profileForm.controls.firstName;
  }

  get lastName(): FormControl {
    return this.profileForm.controls.lastName;
  }

  get email(): FormControl {
    return this.profileForm.controls.email;
  }

  get password(): FormControl {
    return this.profileForm.controls.password;
  }
}
