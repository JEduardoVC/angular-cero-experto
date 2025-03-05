import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { SharedModule } from '@shared/shared.module';
import { PlayListBodyStoreService } from '@shared/components/play-list-body/services/play-list-body-store.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FavoritePageComponent,
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule, HttpClientModule
  ],
  providers: [PlayListBodyStoreService]
})
export class FavoritesModule { }
