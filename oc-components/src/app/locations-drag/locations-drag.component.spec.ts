import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsDragComponent } from './locations-drag.component';

describe('LocationsDragComponent', () => {
  let component: LocationsDragComponent;
  let fixture: ComponentFixture<LocationsDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsDragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
