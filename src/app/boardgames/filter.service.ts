import { Injectable, Predicate } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Game } from './game';

export enum FilterType {
  PLAYER_COUNT = 'PLAYER_COUNT',
  PLAYTIME = 'PLAYTIME',
  WEIGHT = 'WEIGHT',
}

export interface GameFilter {
  displayName: string;
  filterType: FilterType;
  predicate: Predicate<Game>;
}

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private static readonly DEFAULT_PREDICATE: Predicate<Game> = () => true;

  private _filterSubject: Subject<Predicate<Game>> = new BehaviorSubject(
    FilterService.DEFAULT_PREDICATE,
  );

  public combineAndSetFilter(filters: GameFilter[]): void {
    const combined: Predicate<Game> = filters.reduce(
      (total: Predicate<Game>, current: GameFilter) => {
        return (game: Game) => total(game) && current.predicate(game);
      },
      () => true,
    );
    this._filterSubject.next(combined);
  }

  public setFilter(filter: Predicate<Game>): void {
    this._filterSubject.next(filter);
  }

  public getFilter(): Observable<Predicate<Game>> {
    return this._filterSubject;
  }
}
