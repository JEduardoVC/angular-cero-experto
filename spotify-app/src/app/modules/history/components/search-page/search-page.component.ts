import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  @Output() callbackData: EventEmitter<any> = new EventEmitter();

  src: string = '';

  CallSearch(termino: string) {
    if(termino.length > 3) {
      this.callbackData.emit(termino);
    }
  }
}
