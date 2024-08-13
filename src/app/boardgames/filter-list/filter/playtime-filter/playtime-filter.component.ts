import { Component, EventEmitter, Output, Predicate } from '@angular/core';
import { Game } from '../../../game';
import { InputOption } from '../input/input-option';
import { SelectComponent } from '../input/select/select.component';

@Component({
  selector: 'app-playtime-filter',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './playtime-filter.component.html',
  styleUrl: './playtime-filter.component.scss',
})
export class PlaytimeFilterComponent {
  @Output() predicateChange: EventEmitter<Predicate<Game>> = new EventEmitter<
    Predicate<Game>
  >();

  public readonly options: InputOption<number | null>[] = [
    { label: 'Any', value: null, default: true } as InputOption<number | null>,
  ].concat(
    [10, 15, 20, 25, 30, 45, 60, 75, 90, 120, 150, 180].map(
      (val: number) =>
        ({
          label: String(val),
          value: val,
        }) as InputOption<number | null>,
    ),
  );

  public onSelectionChange(time: number | null): void {
    if (time === null) {
      this.predicateChange.emit(() => true);
    } else {
      this.predicateChange.emit(
        (game: Game) => game.stats.playtime.max <= time,
      );
    }
  }
}
