import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(
    private cookie: CookieService

  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try{
      let newRequest = request;
      newRequest = request.clone({
        setHeaders: { authorization: `Bearer ${this.cookie.get('token_service')}`}
      });
      return next.handle(newRequest);
    }
    catch(error){
      console.error("Ocurrio un| error", error);
    }
    return next.handle(request);
  }
}
