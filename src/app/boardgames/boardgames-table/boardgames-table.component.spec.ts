import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgamesTableComponent } from './boardgames-table.component';

describe('BoardgamesTableComponent', () => {
  let component: BoardgamesTableComponent;
  let fixture: ComponentFixture<BoardgamesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardgamesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardgamesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
