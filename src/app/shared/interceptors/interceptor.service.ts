import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import StorageHelper from '../../_core/helpers/storage.helper';
import { Router } from '@angular/router';
import { AuthControllerService } from '../../_core/api/auth-controller.service';
import { UserService } from '../../_core/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private accountController: AuthControllerService,
    private router: Router,
    private userService: UserService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.setHeaders(request)).pipe(
      catchError((value: HttpErrorResponse) => {
        if (value.status === 0 || value.status === 502)
          this.router.navigate(['/auth/login'], { skipLocationChange: true });
        if (value.error.error.includes('INVALID_TOKEN')) {
          this.userService.logOutUser();
          this.router.navigateByUrl('/auth/login');
        }
        return throwError(value);
      })
    );
  }

  setHeaders(request: HttpRequest<any>): HttpRequest<any> {
    let headers = request.headers.set('Access-Control-Allow-Origin', '*');
    if (StorageHelper.getToken()) {
      headers = headers.set(
        'Authorization',
        `Bearer ${StorageHelper.getToken()}`
      );
    }
    return request.clone({ headers });
  }
}
