import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaytimeFilterComponent } from './playtime-filter.component';

describe('PlaytimeFilterComponent', () => {
  let component: PlaytimeFilterComponent;
  let fixture: ComponentFixture<PlaytimeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaytimeFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaytimeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
