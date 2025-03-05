import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url =enviroment.api;

  constructor(
    private http: HttpClient
  ) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password
    }
    return this.http.post(`${this.url}/`, body)
  }
}
