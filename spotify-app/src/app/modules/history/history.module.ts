import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SharedModule } from "../../shared/shared.module";
import { SearchPageComponent } from './components/search-page/search-page.component';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoryPageComponent,
    SearchPageComponent,

  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    FormsModule
]
})
export class HistoryModule { }
