import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardgamesComponent } from './boardgames/boardgames.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardgamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'boardgame-library-webapp';
}
