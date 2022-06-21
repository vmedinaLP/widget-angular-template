import { catchError, switchMap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const tokenisReq = req.clone({
      setHeaders: {
        /**header inicial */
      },
    })
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          return next.handle(req) ///=> replace
          /*return this._authService.refreshToken().pipe(
          switchMap((res: any) => {
            const newToken = req.clone({
              setHeaders: {
                header nuevo
              }
            });
            console.log('new token', res.data.token)
            localStorage.setItem('luegopago_data_token', res.data.token);
            return next.handle(newToken);
          }),
          catchError((err: HttpErrorResponse) => {
            return throwError(err);
          })
        )*/
        }
        return throwError(err)
      })
    )
  }
}
