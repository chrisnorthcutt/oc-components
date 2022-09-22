import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsChecklistComponent } from './locations-checklist.component';

describe('LocationsChecklistComponent', () => {
  let component: LocationsChecklistComponent;
  let fixture: ComponentFixture<LocationsChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsChecklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
