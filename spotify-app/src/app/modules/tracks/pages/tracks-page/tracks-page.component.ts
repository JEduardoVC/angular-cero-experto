import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksStoreService } from '@modules/tracks/services/tracks-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})

export class TracksPageComponent implements OnInit, OnDestroy{
  tracksRandom: Array<TrackModel> = [];
  tracksTrending: Array<TrackModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor(private tracksService: TracksStoreService) {}

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.tracksService.getAllTracks$().toPromise();
  }
  loadDataRandom(): void {
    this.tracksService.getAllRandom$().subscribe((response: TrackModel[]) => {
      this.tracksRandom = response;
    })
  }

  ngOnDestroy(): void {
  }
}
