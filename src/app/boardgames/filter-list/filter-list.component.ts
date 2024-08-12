import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './filter-list.component.html',
  styleUrl: './filter-list.component.scss',
})
export class FilterListComponent {
  public readonly filters: number[] = [1, 2, 3];
}
