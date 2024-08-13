import { Component, EventEmitter, Output, Predicate } from '@angular/core';
import { Game } from '../../../game';
import { Weight } from '../../../weight';
import { ChecklistComponent } from '../input/checklist/checklist.component';
import { InputOption } from '../input/input-option';

@Component({
  selector: 'app-weight-filter',
  standalone: true,
  imports: [ChecklistComponent],
  templateUrl: './weight-filter.component.html',
  styleUrl: './weight-filter.component.scss',
})
export class WeightFilterComponent {
  @Output() predicateChange: EventEmitter<Predicate<Game>> = new EventEmitter<
    Predicate<Game>
  >();

  public readonly options: InputOption<Weight>[] = [
    { label: 'Light', value: Weight.LIGHT, default: true },
    {
      label: 'Medium light',
      value: Weight.MEDIUM_LIGHT,
      default: true,
    },
    { label: 'Medium', value: Weight.MEDIUM, default: true },
    {
      label: 'Medium heavy',
      value: Weight.MEDIUM_HEAVY,
      default: true,
    },
    { label: 'Heavy', value: Weight.HEAVY, default: true },
  ];

  public onSelectionChange(weights: Weight[]): void {
    this.predicateChange.emit((game: Game) =>
      new Set(weights).has(game.stats.weight),
    );
  }
}
