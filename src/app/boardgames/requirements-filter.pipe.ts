import { Pipe, PipeTransform, Predicate } from '@angular/core';
import { Game } from './game';

@Pipe({
  name: 'requirementsFilter',
  standalone: true,
})
export class RequirementsFilterPipe implements PipeTransform {
  public transform(value: Game[], filter: Predicate<Game>): Game[] {
    return value.filter(filter);
  }
}
