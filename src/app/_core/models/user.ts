export interface IUser {
  id: string;
  username: string;
  avatar: string;
  role: number;
  email: string;
  phoneNumber: string;
}

export class User {
  id: string;
  username: string;
  avatar: string;
  role: number;
  isPending: boolean;
  email: string;
  phoneNumber: string;
  constructor(user: IUser, isPending = false) {
    this.id = user.id;
    this.username = user.username;
    this.avatar = user.avatar;
    this.role = user.role;
    this.isPending = isPending;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
  }
}
