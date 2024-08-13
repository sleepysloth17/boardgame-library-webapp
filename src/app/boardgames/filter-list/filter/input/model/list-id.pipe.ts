import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listId',
  standalone: true,
})
export class ListIdPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value, args);
    return null;
  }
}
