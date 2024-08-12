import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgamesComponent } from './boardgames.component';

describe('BoardgamesComponent', () => {
  let component: BoardgamesComponent;
  let fixture: ComponentFixture<BoardgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardgamesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
