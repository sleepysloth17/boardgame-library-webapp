import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCountFilterComponent } from './player-count-filter.component';

describe('PlayerCountFilterComponent', () => {
  let component: PlayerCountFilterComponent;
  let fixture: ComponentFixture<PlayerCountFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerCountFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerCountFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
