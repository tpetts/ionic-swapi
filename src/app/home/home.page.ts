import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  planets: {
    name: string;
  }[] = [];

  constructor(
    private swapiSvc: SwapiService
  ) {}

  ngOnInit() {
    this.swapiSvc.loadPlanets().subscribe(
      data => {
        console.log(data);
        this.planets = [
          ...this.planets
          , ...data.results
        ];
      }
        , err => console.error(err)
    );
  }
}
