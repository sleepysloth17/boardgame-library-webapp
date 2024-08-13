import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, startWith } from 'rxjs';

export interface ChecklistOption<T> {
  label: string;
  value: T;
  selectedByDefault?: boolean;
}

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss',
})
export class ChecklistComponent<T> implements OnInit {
  @Input() options: ChecklistOption<T>[] = [];

  @Output() selected: EventEmitter<T[]> = new EventEmitter<T[]>();

  public form: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this._formBuilder.group(
      this.options.reduce(
        (
          total: Record<number, FormControl<boolean>>,
          current: ChecklistOption<T>,
          i: number,
        ) => {
          total[i] = this._formBuilder.control(
            !!current.selectedByDefault,
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

  private _emitSelected(state: Record<number, boolean>): void {
    this.selected.emit(
      this.options
        .filter((val: ChecklistOption<T>, i: number) => state[i])
        .map((option: ChecklistOption<T>) => option.value),
    );
  }
}
