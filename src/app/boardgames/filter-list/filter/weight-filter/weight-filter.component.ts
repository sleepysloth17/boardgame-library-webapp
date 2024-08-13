import { Component, EventEmitter, Output, Predicate } from '@angular/core';
import { Game } from '../../../game';
import { Weight } from '../../../weight';
import {
  ChecklistComponent,
  ChecklistOption,
} from '../input/checklist/checklist.component';

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

  public readonly options: ChecklistOption<Weight>[] = [
    { label: 'Light', value: Weight.LIGHT, selectedByDefault: true },
    {
      label: 'Medium light',
      value: Weight.MEDIUM_LIGHT,
      selectedByDefault: true,
    },
    { label: 'Medium', value: Weight.MEDIUM, selectedByDefault: true },
    {
      label: 'Medium heavy',
      value: Weight.MEDIUM_HEAVY,
      selectedByDefault: true,
    },
    { label: 'Heavy', value: Weight.HEAVY, selectedByDefault: true },
  ];

  public onSelectionChange(weights: Weight[]): void {
    console.log('selected', weights);
  }
}
