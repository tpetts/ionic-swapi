import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, merge, pipe } from 'rxjs';
import { repeat } from 'rxjs/operators';

interface SwapiPlanetDataWeCareAbout {
  next: string;
  results: {
    name: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private httpSvc: HttpClient
  ) { }

  loadPlanets = (): Observable<SwapiPlanetDataWeCareAbout> => {
    const page1 = this.httpSvc.get<SwapiPlanetDataWeCareAbout>('https://swapi.dev/api/planets');
    const page2 = this.httpSvc
      .get<SwapiPlanetDataWeCareAbout>('https://swapi.dev/api/planets/?page=2')
      .pipe(
        repeat(3)
      )
      ;

    return merge(
      page1
      , page2
    );
  };
}
