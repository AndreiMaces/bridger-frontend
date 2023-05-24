import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSpecificationsFormComponent } from './vehicle-specifications-form.component';

describe('VehicleSpecificationsFormComponent', () => {
  let component: VehicleSpecificationsFormComponent;
  let fixture: ComponentFixture<VehicleSpecificationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSpecificationsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleSpecificationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
