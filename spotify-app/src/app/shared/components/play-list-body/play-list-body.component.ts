import { Component, OnInit } from '@angular/core';
import * as dataRaw from "../../../data/tracks.json"
import { TrackModel } from '@core/models/tracks.model';
import { PlayListBodyStoreService } from './services/play-list-body-store.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.scss']
})
export class PlayListBodyComponent implements OnInit {

  tracks: TrackModel[] =[];
  optionsSort: { property: string | null, order: string} = {property: null, order: 'asc' }

  constructor(private service: PlayListBodyStoreService) {}

  ngOnInit(): void {
    const { data } : any = (dataRaw as any).default;
    this.tracks = data;
    // this.getTracks();
  }

  changeSort(property: string): void{
    const { order } = this.optionsSort;
    this.optionsSort = { property: property, order: order === 'asc' ? 'desc' : 'asc'}
  }

  getTracks(): void {
    // this.service.getTracks().subscribe(
    //   (data) => {
    //     // console.log(data);
    //     this.tracks = data;
    //   }
    // )
  }
}
