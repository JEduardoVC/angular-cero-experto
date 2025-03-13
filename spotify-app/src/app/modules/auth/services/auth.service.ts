import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { enviroment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url =enviroment.api;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
  ) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    }
    return this.http.post(`${this.url}/auth/login`, body).pipe(
      tap((resp: any) => {
        const { tokenSession } = resp;
        if(tokenSession){
          this.router.navigate(['/', 'tracks']);
        }
      })

    )
  }
}
