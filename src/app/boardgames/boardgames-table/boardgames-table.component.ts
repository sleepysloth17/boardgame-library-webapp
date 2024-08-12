import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-boardgames-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boardgames-table.component.html',
  styleUrl: './boardgames-table.component.scss',
})
export class BoardgamesTableComponent {
  @Input() public games: Game[] = [];
}
