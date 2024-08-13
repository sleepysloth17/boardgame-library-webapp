import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  Predicate,
} from '@angular/core';
import { GameFilter } from '../../filter.service';
import { Game } from '../../game';
import { PlayerCountFilterComponent } from './player-count-filter/player-count-filter.component';
import { PlaytimeFilterComponent } from './playtime-filter/playtime-filter.component';
import { WeightFilterComponent } from './weight-filter/weight-filter.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    PlayerCountFilterComponent,
    PlaytimeFilterComponent,
    WeightFilterComponent,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() filter: GameFilter | null = null;

  @Output() predicateChange: EventEmitter<Predicate<Game>> = new EventEmitter<
    Predicate<Game>
  >();

  public onPredicateChange(predicate: Predicate<Game>): void {
    this.predicateChange.emit(predicate);
  }
}
