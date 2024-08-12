import { Component, OnInit } from '@angular/core';
import { BoardgamesTableComponent } from './boardgames-table/boardgames-table.component';
import { BoardgamesService } from './boardgames.service';
import { FilterListComponent } from './filter-list/filter-list.component';
import { Game } from './game';

@Component({
  selector: 'app-boardgames',
  standalone: true,
  imports: [BoardgamesTableComponent, FilterListComponent],
  providers: [BoardgamesService],
  templateUrl: './boardgames.component.html',
  styleUrl: './boardgames.component.scss',
})
export class BoardgamesComponent implements OnInit {
  public games: Game[] = [];

  constructor(private _boardgamesService: BoardgamesService) {}

  public ngOnInit(): void {
    this._boardgamesService
      .getCollection()
      .then((games: Game[]) => (this.games = games));
  }
}
