export default class StorageHelper {
  private static readonly _tokenKey: string = 'jwtToken';
  private static readonly _refreshKey: string = 'refreshToken';
  private static readonly _id: string = 'id';

  static saveToken(token: string): void {
    window.localStorage[StorageHelper._tokenKey] = token;
  }

  static saveId(userId: string): void {
    window.localStorage[StorageHelper._id] = userId;
  }

  static getToken(): string {
    return window.localStorage.getItem(StorageHelper._tokenKey);
  }

  static getId(): string {
    return window.localStorage.getItem(StorageHelper._id);
  }

  static deleteToken(): void {
    window.localStorage.removeItem(StorageHelper._tokenKey);
  }

  static deleteId(): void {
    window.localStorage.removeItem(StorageHelper._id);
  }
}
