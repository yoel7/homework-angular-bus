import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTripDisplayComponent } from './bus-trip-display.component';

describe('BusTripDisplayComponent', () => {
  let component: BusTripDisplayComponent;
  let fixture: ComponentFixture<BusTripDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusTripDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusTripDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
