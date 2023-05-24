import { ComponentFixture, TestBed } from '@angular/core/testing';

import { videoDescriptionFormComponent } from './vehicle-description-form.component';

describe('videoDescriptionFormComponent', () => {
  let component: videoDescriptionFormComponent;
  let fixture: ComponentFixture<videoDescriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [videoDescriptionFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(videoDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
