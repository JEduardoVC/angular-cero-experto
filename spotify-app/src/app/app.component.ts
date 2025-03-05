import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spotify';

  // Typos de datos
  

  car : CarModel = {
    brand: "Toyota",
    model: "Sienna",
    year: 2013
  }

  listCars: Array<CarModel> = [
    {
      brand: "Ford",
      model: "Focus",
      year: 2020
    },
    {
      brand: "Seat",
      model: "Ibiza",
      year: 2018
    }
  ];
}

interface CarModel {
  brand: string,
  model: string,
  year?: number
}
