import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    name:'Demon Slayer',
    album:'Kimetsu no Yaiba',
    url: '',
    cover: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/765ee047befcfb677d169f5de4c82d5c.jpg',
    id: 1
  }

  listObservers$: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) {}

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

  ngOnInit(): void {
    const observer$: Subscription = this.multimediaService.callback.subscribe((response: TrackModel) => {})
    this.listObservers$ = [observer$];
  }
}
