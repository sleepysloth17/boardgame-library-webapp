import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { debounceTime, startWith, tap } from 'rxjs';
import { InputOption } from '../model/input-option';

@Component({
  selector: 'app-radio-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './radio-list.component.html',
  styleUrl: './radio-list.component.scss',
})
export class RadioListComponent<T> implements OnInit {
  @Input() options: InputOption<T>[] = [];

  @Output() selected: EventEmitter<T> = new EventEmitter<T>();

  public form: FormGroup<{ radio: FormControl<T> }>;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      radio: new FormControl(),
    });
  }

  public ngOnInit(): void {
    this.form = this._formBuilder.group({
      radio: new FormControl(),
    });

    this.form.valueChanges
      .pipe(tap(console.log))
      .pipe(startWith(this.form.value), debounceTime(1000))
      .subscribe(this._emitSelected.bind(this));

    this.form.markAsPending();
  }

  private _emitSelected(state: { radio: T }): void {
    this.selected.emit(state.radio);
  }
}
