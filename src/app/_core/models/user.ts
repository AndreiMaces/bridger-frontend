export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: string;
  email: string;
  phoneNumber: string;
}

export class User {
  id: string;
  username: string;
  avatar: string;
  role: string;
  isPending: boolean;
  email: string;
  phoneNumber: string;
  constructor(user: IUser, isPending = false) {
    this.id = user.id;
    this.username = user.firstName + ' ' + user.lastName;
    this.avatar = user.avatar;
    this.role = user.role;
    this.isPending = isPending;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
  }
}
