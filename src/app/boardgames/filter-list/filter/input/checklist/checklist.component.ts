import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, startWith } from 'rxjs';
import { InputOption } from '../model/input-option';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss',
})
export class ChecklistComponent<T> implements OnInit {
  @Input() options: InputOption<T>[] = [];

  @Output() selected: EventEmitter<T[]> = new EventEmitter<T[]>();

  public form: FormGroup<Record<string, FormControl<boolean>>> = new FormGroup<
    Record<string, FormControl<boolean>>
  >({});

  constructor(private _formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this._formBuilder.group(
      this.options.reduce(
        (
          total: Record<string, FormControl<boolean>>,
          current: InputOption<T>,
          i: number,
        ) => {
          total[i] = this._formBuilder.control(
            !!current.default,
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
      this.options
        .filter((val: InputOption<T>, i: number) => state[i])
        .map((option: InputOption<T>) => option.value),
    );
  }
}
