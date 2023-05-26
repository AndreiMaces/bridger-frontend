import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalSharedModule } from '../shared/local-shared.module';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfirmEmailMessageComponent } from './confirm-email-message/confirm-email-message.component';

@NgModule({
  declarations: [ConfirmEmailComponent, ConfirmEmailMessageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    LocalSharedModule,
    MatProgressSpinnerModule,
  ],
})
export class AuthModule {}
