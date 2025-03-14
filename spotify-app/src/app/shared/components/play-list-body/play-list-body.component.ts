import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { PlayListBodyStoreService } from './services/play-list-body-store.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.scss']
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: TrackModel[] =[];
  optionsSort: { property: string | null, order: string} = {property: null, order: 'asc' }

  constructor(private service: PlayListBodyStoreService) {}

  ngOnInit(): void {
    
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
