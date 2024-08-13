import { Component, EventEmitter, Output, Predicate } from '@angular/core';
import { Game } from '../../../game';
import {
  SelectComponent,
  SelectOption,
} from '../input/select/select.component';

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

  public readonly options: SelectOption<number | null>[] = [
    { label: 'Any', value: null } as SelectOption<number | null>,
  ].concat(
    [10, 15, 20, 25, 30, 45, 60, 75, 90, 120, 150, 180].map(
      (val: number) =>
        ({
          label: String(val),
          value: val,
        }) as SelectOption<number | null>,
    ),
  );

  public onSelectionChange(time: number | null): void {
    console.log(time);
  }
}
