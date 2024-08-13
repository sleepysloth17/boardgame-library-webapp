import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, startWith } from 'rxjs';
import { UUID } from '../../../../../utils/uuid';
import { InputOption, UniqueInputOption } from '../input-option';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent<T> implements OnInit {
  @Input() set options(options: InputOption<T>[]) {
    this.selectOptions = options.map((option: InputOption<T>) => ({
      id: UUID.random().value,
      data: option,
    }));
    this._selectOptionMap = this.selectOptions.reduce(
      (
        returnMap: Record<string, InputOption<T>>,
        current: UniqueInputOption<T>,
      ) => {
        returnMap[current.id] = current.data;
        return returnMap;
      },
      {},
    );
  }

  @Output() selected: EventEmitter<T | null> = new EventEmitter<T | null>();

  public form: FormControl<string | null> = new FormControl<string | null>(
    null,
  );

  public selectOptions: UniqueInputOption<T>[] = [];

  // TODO - this is to get around it returning a string if I just use option.value which is annoying
  private _selectOptionMap: Record<string, InputOption<T>> = {};

  constructor(private _formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this._formBuilder.control(
      this.selectOptions.find((val: UniqueInputOption<T>) => !!val.data.default)
        ?.id || null,
    );

    this.form.valueChanges
      .pipe(startWith(this.form.value), debounceTime(1000))
      .subscribe(this._emitSelected.bind(this));

    this.form.markAsPending();
  }

  private _emitSelected(selected: string | null): void {
    if (selected === null) {
      this.selected.emit(null);
    } else {
      this.selected.emit(this._selectOptionMap[selected].value);
    }
  }
}
