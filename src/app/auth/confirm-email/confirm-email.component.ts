import { Component, OnInit } from '@angular/core';
import { AuthControllerService } from '../../_core/api/auth-controller.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss'],
})
export class ConfirmEmailComponent implements OnInit {
  constructor(
    private authController: AuthControllerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.authController
      .confirmEmail(this.route.snapshot.params['token'])
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/auth/login');
        },
      });
  }
}
