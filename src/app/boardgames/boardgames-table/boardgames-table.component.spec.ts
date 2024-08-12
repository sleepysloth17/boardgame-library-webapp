import { ComponentFixture, TestBed } from '@angular/core/testing';

import { boardgametable } from './boardgames-table.component';

describe('BoardgamesTableComponent', () => {
  let component: boardgametable;
  let fixture: ComponentFixture<boardgametable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [boardgametable],
    }).compileComponents();

    fixture = TestBed.createComponent(boardgametable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
