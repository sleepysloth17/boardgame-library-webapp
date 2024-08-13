import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, startWith } from 'rxjs';
import { InputOption } from '../input-option';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent<T> implements OnInit {
  @Input() options: InputOption<T>[] = [];

  @Output() selected: EventEmitter<T | null> = new EventEmitter<T | null>();

  public form: FormControl<T | null> = new FormControl<T | null>(null);

  constructor(private _formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this._formBuilder.control(
      this.options.find((val: InputOption<T>) => !!val.default)?.value || null,
    );

    this.form.valueChanges
      .pipe(startWith(this.form.value), debounceTime(1000))
      .subscribe(this._emitSelected.bind(this));

    this.form.markAsPending();
  }

  private _emitSelected(selected: T | null): void {
    this.selected.emit(selected);
  }
}
