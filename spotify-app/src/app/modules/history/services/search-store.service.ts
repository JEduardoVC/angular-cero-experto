import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { enviroment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SearchStoreService {
  private readonly URL = enviroment.api;

  constructor(
    private http: HttpClient
  ) { }

  searchTracks$(termino: string): Observable<any>{
    return this.http.get(`${this.URL}/tracks?src=${termino}`).pipe(
      map((dataRaw: any) => dataRaw.data)
    )
  }
}
