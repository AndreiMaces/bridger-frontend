import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleImageUploaderComponent } from './multiple-image-uploader.component';

describe('MultipleImageUploaderComponent', () => {
  let component: MultipleImageUploaderComponent;
  let fixture: ComponentFixture<MultipleImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleImageUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
