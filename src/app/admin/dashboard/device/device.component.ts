import { Component } from '@angular/core';
import { Socket } from 'socket.io-client';
import { User } from '../../../_core/models/user';
import { UserService } from '../../../_core/services/user.service';
import { LoadingServiceService } from '../../../_core/services/loading-service.service';
import { SocketService } from '../../../_core/services/socket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent {
  currentUser: User;
  link: string;
  socket: Socket;

  constructor(
    private userService: UserService,
    private loaderService: LoadingServiceService,
    private socketService: SocketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.link = this.route.snapshot.params['id'];
    this.loadUser();
  }

  loadUser(): void {
    this.loaderService.setLoader(true);
    this.userService.currentUser$.subscribe({
      next: (res) => {
        this.currentUser = res;
        this.loaderService.setLoader(false);
      },
    });
  }

  ngOnDestroy(): void {
    this.socketService.destroy();
  }
}
