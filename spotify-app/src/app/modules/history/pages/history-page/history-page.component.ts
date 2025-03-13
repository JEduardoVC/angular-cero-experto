import { Component } from '@angular/core';
import { AppModule } from "../../../../app.module";
import { SharedModule } from "../../../../shared/shared.module";
import { SearchStoreService } from '@modules/history/services/search-store.service';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
})
export class HistoryPageComponent {
  listResult$:  Observable<any> = of();
  constructor(
    private searchService: SearchStoreService
  ) {}

  ngOnInit() {

  }
  
  receiveData(data: any) {
    this.listResult$ = this.searchService.searchTracks$(data);
  }
}
