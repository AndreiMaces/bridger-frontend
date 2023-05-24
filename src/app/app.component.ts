import { Component } from '@angular/core';
import { UserService } from './_core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  constructor(private userService: UserService) {
    this.userService.setCurrentUser();
  }
}
