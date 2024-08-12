import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from './game';

@Injectable({
  providedIn: 'root',
})
export class BoardgamesService {
  private static readonly API_URL: string = `${environment.apiUrl}/collection`;

  constructor(private _http: HttpClient) {}

  public getCollection(): Observable<Game[]> {
    console.log(`Requesting collection from ${BoardgamesService.API_URL}`);
    return this._http
      .get<object[]>(BoardgamesService.API_URL)
      .pipe(
        map((value: object[]) => value.map((game: object) => game as Game)),
      );
  }
}
