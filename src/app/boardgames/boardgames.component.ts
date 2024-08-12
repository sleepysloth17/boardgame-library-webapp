import { Component } from '@angular/core';
import { BoardgamesTableComponent } from './boardgames-table/boardgames-table.component';
import { FilterListComponent } from './filter-list/filter-list.component';

@Component({
  selector: 'app-boardgames',
  standalone: true,
  imports: [BoardgamesTableComponent, FilterListComponent],
  templateUrl: './boardgames.component.html',
  styleUrl: './boardgames.component.scss',
})
export class BoardgamesComponent {}
