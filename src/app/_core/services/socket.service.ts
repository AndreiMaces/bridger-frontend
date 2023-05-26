import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: Socket;

  constructor() {
    this.init();
  }

  init(): void {
    this.socket = io('https://api.watch.macesandrei.com', {
      path: '',
      forceNew: true,
      reconnectionAttempts: 3,
      timeout: 2000,
    });
  }

  destroy(): void {
    if (this.socket) {
      this.socket.emit('forceDisconnect');
      this.socket.close();
      this.socket.disconnect();
      this.socket.removeAllListeners();
      this.socket = undefined;
    }
  }
}
