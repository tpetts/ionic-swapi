import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface swapiPlanetDataWeCareAbout {
  next: String;
  results: {
    name: String;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private httpSvc: HttpClient
  ) { }

  loadPlanets = () => {
    
  };
}
