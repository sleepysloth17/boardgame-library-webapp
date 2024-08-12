import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Predicate } from '@angular/core';
import { FilterService } from '../filter.service';
import { Game } from '../game';
import { RequirementsFilterPipe } from '../requirements-filter.pipe';
import { BoardgameDetailComponent } from './boardgame-detail/boardgame-detail.component';

@Component({
  selector: 'app-boardgames-table',
  standalone: true,
  imports: [CommonModule, BoardgameDetailComponent, RequirementsFilterPipe],
  templateUrl: './boardgames-table.component.html',
  styleUrl: './boardgames-table.component.scss',
})
export class BoardgamesTableComponent implements OnInit {
  @Input() public games: Game[] = [];

  public filter: Predicate<Game> = () => true;

  private _expandedGame: Game | null = null;

  constructor(private _filterService: FilterService) {}

  public ngOnInit(): void {
    this._filterService
      .getFilter()
      .subscribe((filter: Predicate<Game>) => (this.filter = filter));
  }

  public expand(game: Game): void {
    this._expandedGame =
      this._expandedGame && this._expandedGame.id === game.id ? null : game;
  }

  public isExpanded(game: Game): boolean {
    return !!this._expandedGame && this._expandedGame.id === game.id;
  }
}
