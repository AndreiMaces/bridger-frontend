import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-rounting-module';
import { LocalSharedModule } from '../../shared/local-shared.module';
import { UserRowComponent } from './user-row/user-row.component';
import { FilterComponent } from './filter/filter.component';
import { InviteUserModalComponent } from './invite-user-modal/invite-user-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserRowComponent,
    FilterComponent,
    InviteUserModalComponent,
    UserProfileComponent,
    DeleteUserModalComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    LocalSharedModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
})
export class UsersModule {}
