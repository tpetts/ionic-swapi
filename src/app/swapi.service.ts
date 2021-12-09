import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, EMPTY } from 'rxjs';
import { tap, map, expand } from 'rxjs/operators';

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
    const page1 = this.httpSvc.get<SwapiPlanetDataWeCareAbout>('https://swapi.dev/api/planets')
      .pipe(
        expand(x => x.next ? this.httpSvc.get<SwapiPlanetDataWeCareAbout>(x.next) : EMPTY)
      )
    ;

    return page1;
  };
}
