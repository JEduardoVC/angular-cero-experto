import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayListBodyStoreService {
  private apiURL = 'http://localhost:3000/tracks';
  constructor(private http: HttpClient) {}

  getTracks(){
    return this.http.get(this.apiURL);
  }
}
