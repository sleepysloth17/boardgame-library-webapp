import { TestBed } from '@angular/core/testing';

import { BoardgamesService } from './boardgames.service';

describe('BoardgamesService', () => {
  let service: BoardgamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardgamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
