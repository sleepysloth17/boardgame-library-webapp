import { Component, EventEmitter, Output, Predicate } from '@angular/core';
import { Game } from '../../../game';
import {
  ChecklistComponent,
  ChecklistOption,
} from '../input/checklist/checklist.component';
import {
  SelectComponent,
  SelectOption,
} from '../input/select/select.component';

enum CountType {
  ANY = 'ANY',
  SUPPORTS = 'SUPPORTS',
  BEST = 'BEST',
  RECOMMENDED = 'RECOMMENDED',
}

@Component({
  selector: 'app-player-count-filter',
  standalone: true,
  imports: [SelectComponent, ChecklistComponent],
  templateUrl: './player-count-filter.component.html',
  styleUrl: './player-count-filter.component.scss',
})
export class PlayerCountFilterComponent {
  @Output() predicateChange: EventEmitter<Predicate<Game>> = new EventEmitter<
    Predicate<Game>
  >();

  public readonly countOptions: SelectOption<number | null>[] = [
    { label: 'Any', value: null } as SelectOption<number | null>,
  ].concat(
    new Array(10).fill(null).map(
      (val: null, i: number) =>
        ({
          label: String(i + 1),
          value: i + 1,
        }) as SelectOption<number | null>,
    ),
  );

  public readonly checklistOptions: ChecklistOption<CountType>[] = [
    { label: 'Any', value: CountType.ANY, selectedByDefault: true },
    { label: 'Supports', value: CountType.SUPPORTS },
    { label: 'Best', value: CountType.BEST },
    { label: 'Recommended', value: CountType.RECOMMENDED },
  ];

  public onCountChange(count: number | null): void {
    console.log('selected', count);
  }

  public onTypeChange(count: CountType[]): void {
    console.log(count);
  }
}
