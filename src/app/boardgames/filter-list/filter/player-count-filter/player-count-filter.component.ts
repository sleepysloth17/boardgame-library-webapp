import { Component, EventEmitter, Output, Predicate } from '@angular/core';
import { Game } from '../../../game';
import { InputOption } from '../input/input-option';
import { RadioListComponent } from '../input/radio-list/radio-list.component';
import { SelectComponent } from '../input/select/select.component';

enum CountType {
  ANY = 'ANY',
  SUPPORTS = 'SUPPORTS',
  BEST = 'BEST',
  RECOMMENDED = 'RECOMMENDED',
}

@Component({
  selector: 'app-player-count-filter',
  standalone: true,
  imports: [SelectComponent, RadioListComponent],
  templateUrl: './player-count-filter.component.html',
  styleUrl: './player-count-filter.component.scss',
})
export class PlayerCountFilterComponent {
  @Output() predicateChange: EventEmitter<Predicate<Game>> = new EventEmitter<
    Predicate<Game>
  >();

  public readonly countOptions: InputOption<number | null>[] = [
    { label: 'Any', value: null, default: true } as InputOption<number | null>,
  ].concat(
    new Array(10).fill(null).map(
      (val: null, i: number) =>
        ({
          label: String(i + 1),
          value: i + 1,
        }) as InputOption<number | null>,
    ),
  );

  public readonly checklistOptions: InputOption<CountType>[] = [
    { label: 'Any', value: CountType.ANY, default: true },
    { label: 'Supports', value: CountType.SUPPORTS },
    { label: 'Best', value: CountType.BEST },
    { label: 'Recommended', value: CountType.RECOMMENDED },
  ];

  private _count: number | null = null;
  private _countType: CountType = CountType.ANY;

  public onCountChange(count: number | null): void {
    this._count = count;
    this._getAndEmitPlayerCountFilter();
  }

  public onTypeChange(type: CountType): void {
    this._countType = type;
    this._getAndEmitPlayerCountFilter();
  }

  private _getAndEmitPlayerCountFilter(): void {
    this.predicateChange.emit(
      this._getPlayerCountFilter(this._countType, this._count),
    );
  }

  private _getPlayerCountFilter(
    type: CountType,
    count: number | null,
  ): Predicate<Game> {
    if (count === null || type === CountType.ANY) {
      return () => true;
    } else {
      switch (type) {
        case CountType.SUPPORTS:
          return (game: Game) =>
            game.stats.playerCount.range.min <= count &&
            game.stats.playerCount.range.max >= count;
        case CountType.BEST:
          return (game: Game) =>
            new Set(game.stats.playerCount.best).has(+count);
        case CountType.RECOMMENDED:
          return (game: Game) =>
            new Set(game.stats.playerCount.suggested).has(+count);
      }
    }
  }
}
