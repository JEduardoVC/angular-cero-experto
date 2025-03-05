import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  mainMenu: { defaultOptions: Array<any>, accessLink: Array<any> } = { defaultOptions: [], accessLink: [] };
  customOptions: Array<any> = [];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: "Home",
        icon: "uil-estate",
        router: ["/", 'auth']
      },
      {
        name: "Buscar",
        icon: "uil-search",
        router: ["/", "history"]
      },
      {
        name: "Tu biblioteca",
        icon: "uil-chart",
        router: ["/", "favorites"],
        query: { hola: 'mundo' }
      }
    ];

    this.mainMenu.accessLink = [
      {
        name: "Crear lista",
        icon: "uil-plus-square"
      },
      {
        name: "Canciones que te gustan",
        icon: "uil-heart-medical"
      }
    ];

    this.customOptions = [
      { name: "Mi lista °1", router: ["/"] },
      { name: "Mi lista °2", router: ["/"] },
      { name: "Mi lista °3", router: ["/"] },
      { name: "Mi lista °4", router: ["/"] },
      { name: "Mi lista °5", router: ["/"] }
    ];
  }

  goTo(event: any): void{
    this.router.navigate([''])
  }
}
