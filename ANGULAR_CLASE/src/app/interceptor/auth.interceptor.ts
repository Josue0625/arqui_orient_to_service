import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("por aqui pase")

    let cloneReq = request;

    cloneReq = request.clone(
      {
        setHeaders:{
          Authorization: 'Bearer ' + localStorage.getItem("access_token")
        }
      }
    )

    return next.handle(cloneReq).pipe(
      finalize(()=>{
        console.log("1111111");
      })
    );
  }
}
