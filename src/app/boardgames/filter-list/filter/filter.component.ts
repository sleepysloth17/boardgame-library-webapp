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

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() filter: GameFilter | null = null;

  public blah = true;

  @Output() predicateChange: EventEmitter<Predicate<Game>> = new EventEmitter<
    Predicate<Game>
  >();

  public test(): void {
    this.blah = !this.blah;
    this.predicateChange.emit(() => this.blah);
  }
}
