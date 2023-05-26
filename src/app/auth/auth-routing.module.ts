import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ConfirmEmailMessageComponent } from './confirm-email-message/confirm-email-message.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('../auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'confirm-email/:token',
    component: ConfirmEmailComponent,
  },
  {
    path: 'confirm-email-message',
    component: ConfirmEmailMessageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
