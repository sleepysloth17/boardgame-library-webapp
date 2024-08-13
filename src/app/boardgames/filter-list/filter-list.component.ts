import { CommonModule } from '@angular/common';
import { Component, Predicate } from '@angular/core';
import { FilterService, FilterType, GameFilter } from '../filter.service';
import { Game } from '../game';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.scss',
})
export class FilterListComponent {
  public readonly filters: GameFilter[] = [
    {
      displayName: 'Player Count',
      filterType: FilterType.PLAYER_COUNT,
      predicate: () => true,
    },
    {
      displayName: 'Weight',
      filterType: FilterType.WEIGHT,
      predicate: () => true,
    },
    {
      displayName: 'Max Playtime',
      filterType: FilterType.PLAYTIME,
      predicate: () => true,
    },
  ];

  constructor(private _filterService: FilterService) {}

  public onPredicateChange(
    currentFilter: GameFilter,
    newPredicate: Predicate<Game>,
  ): void {
    currentFilter.predicate = newPredicate;
    this._filterService.combineAndSetFilter(this.filters);
  }
}
