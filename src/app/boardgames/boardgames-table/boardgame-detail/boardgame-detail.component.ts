import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Game } from '../../game';

@Component({
  selector: 'app-boardgame-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boardgame-detail.component.html',
  styleUrl: './boardgame-detail.component.scss',
})
export class BoardgameDetailComponent {
  @Input() game: Game | null = null;
}
