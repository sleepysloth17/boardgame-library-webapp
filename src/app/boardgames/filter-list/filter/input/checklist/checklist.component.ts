import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, startWith } from 'rxjs';
import { UUID } from '../../../../../utils/uuid';
import { InputOption, UniqueInputOption } from '../input-option';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss',
})
export class ChecklistComponent<T> implements OnInit {
  @Input() set options(value: InputOption<T>[]) {
    this.checklistOptions = value.map((option: InputOption<T>) => ({
      id: UUID.random().value,
      data: option,
    }));
  }

  @Output() selected: EventEmitter<T[]> = new EventEmitter<T[]>();

  public id: UUID = UUID.random();

  public form: FormGroup<Record<string, FormControl<boolean>>> = new FormGroup<
    Record<string, FormControl<boolean>>
  >({});

  public checklistOptions: UniqueInputOption<T>[] = [];

  constructor(private _formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this._formBuilder.group(
      this.checklistOptions.reduce(
        (
          total: Record<string, FormControl<boolean>>,
          current: UniqueInputOption<T>,
        ) => {
          total[current.id] = this._formBuilder.control(
            !!current.data.default,
          ) as FormControl<boolean>;
          return total;
        },
        {},
      ),
    );

    this.form.valueChanges
      .pipe(startWith(this.form.value), debounceTime(1000))
      .subscribe(this._emitSelected.bind(this));

    this.form.markAsPending();
  }

  private _emitSelected(state: Partial<Record<string, boolean>>): void {
    this.selected.emit(
      this.checklistOptions
        .filter((val: UniqueInputOption<T>) => state[val.id])
        .map((option: UniqueInputOption<T>) => option.data.value),
    );
  }
}
