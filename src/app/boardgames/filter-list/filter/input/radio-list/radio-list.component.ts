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
  selector: 'app-radio-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './radio-list.component.html',
  styleUrl: './radio-list.component.scss',
})
export class RadioListComponent<T> implements OnInit {
  @Input() set options(value: InputOption<T>[]) {
    this.radioListOptions = value.map((option: InputOption<T>) => ({
      id: UUID.random().value,
      data: option,
    }));
  }

  @Output() selected: EventEmitter<T> = new EventEmitter<T>();

  public readonly id: UUID = UUID.random();

  public form: FormGroup<Record<string, FormControl<T>>> = new FormGroup<
    Record<string, FormControl<T>>
  >({});

  public radioListOptions: UniqueInputOption<T>[] = [];

  constructor(private _formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this._formBuilder.group({
      [this.id.value]: new FormControl(
        this._getInitalValue(),
      ) as FormControl<T>,
    });

    this.form.valueChanges
      .pipe(startWith(this.form.value), debounceTime(1000))
      .subscribe(this._emitSelected.bind(this));

    this.form.markAsPending();
  }

  private _getInitalValue(): T {
    for (const option of this.radioListOptions) {
      if (option.data.default) {
        return option.data.value;
      }
    }

    return this.radioListOptions[0].data.value;
  }

  private _emitSelected(state: Partial<Record<string, T>>): void {
    this.selected.emit(state[this.id.value]);
  }
}
