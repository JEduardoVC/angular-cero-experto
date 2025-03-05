import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { enviroment } from 'src/environments/enviroment';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
    providedIn: 'root'
})
export class TracksStoreService {

    private readonly URL = enviroment.api;

    constructor(private http: HttpClient) {

    }

    private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
        return new Promise((resolve, reject) => {
            const listTemp = listTracks.filter( a => a.id != id)
            resolve(listTemp)})
    }

    getAllTracks$(): Observable<any> {
        return this.http.get(`${this.URL}/tracks`)
            .pipe(
                map((track: any) => track.data)
            );
    }

    getAllRandom$(): Observable<any>{
        return this.http.get(`${this.URL}/tracks`)
            .pipe(
                mergeMap(({ data }: any) => this.skipById(data, 2)),
                catchError((err) => {
                    console.error(err);
                    return of([])
                })
        )
    }
}
