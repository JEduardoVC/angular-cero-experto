import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // Se declaran componentes, directivas, pipes
  declarations: [
    AppComponent
  ],
  // Solo se importan otros modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
