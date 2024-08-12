import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable()
export class BoardgamesService {
  constructor() {
    console.log('done');
  }

  public getCollection(): Promise<Game[]> {
    return Promise.resolve(
      new Array(300)
        .fill(null)
        .map((_, i: number) => ({ name: `Example Game ${i + 1}` }) as Game),
    );
  }
}
