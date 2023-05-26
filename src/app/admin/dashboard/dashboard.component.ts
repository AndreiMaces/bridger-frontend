import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../_core/services/user.service';
import { User } from '../../_core/models/user';
import { Socket } from 'socket.io-client';
import { LoadingServiceService } from '../../_core/services/loading-service.service';
import { SocketService } from '../../_core/services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy {
  currentUser: User;
  socket: Socket;
  devices: {
    link: string;
    deviceIp: string;
    deviceInfo: {
      brand: string;
      deviceName: string;
      modelName: string;
    };
  }[];

  constructor(
    private userService: UserService,
    private loaderService: LoadingServiceService,
    private socketService: SocketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.socketService.init();
    this.socket = this.socketService.socket;
    this.loadUser();
  }

  loadUser(): void {
    this.loaderService.setLoader(true);
    this.userService.currentUser$.subscribe({
      next: (res) => {
        this.currentUser = res;
        this.loaderService.setLoader(false);
        this?.socket?.on(res?.id + 'online-users', (devs: any) => {
          if (!this?.devices?.length || this?.devices?.length !== devs.length)
            this.devices = devs;
          console.log(devs);
        });
      },
    });
  }

  goToDevice(link: string): void {
    this.router.navigateByUrl(`/dashboard/${link}`);
  }

  ngOnDestroy() {
    this.socketService.destroy();
  }
}
