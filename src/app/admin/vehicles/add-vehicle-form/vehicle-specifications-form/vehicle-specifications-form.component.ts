import { Component, Input } from '@angular/core';
import { LabelType } from '../../../../_core/enums/LabelType';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid4 } from 'uuid';

@Component({
  selector: 'app-vehicle-specifications-form',
  templateUrl: './vehicle-specifications-form.component.html',
  styleUrls: ['./vehicle-specifications-form.component.scss'],
})
export class VehicleSpecificationsFormComponent {
  LabelType = LabelType;
  isVisible = false;
  @Input() engineFormControl = new FormControl('');
  @Input() featuresFormControl = new FormControl('');
  @Input() performanceUpgrades = new FormControl('');
  @Input() interiorFormControl = new FormControl('');
  @Input() exteriorFormControl = new FormControl('');
  @Input() dimensionsFormControl = new FormControl('');
  @Input() shopLinkFormControl = new FormControl('');
  @Input() specifications = new FormControl([]);

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  toggleForm(): void {
    this.isVisible = !this.isVisible;
    console.log(this.specifications.value);
  }

  addSpecification(evt: Event): void {
    evt.preventDefault();
    if (this.form.valid) {
      this.specifications.value.push({
        id: uuid4(),
        name: this.name.value,
        description: new FormControl(''),
      });
      this.name.setValue('');
      this.form.markAsUntouched();
      this.toggleForm();
    }
  }

  removeSpecification(id: string): void {
    this.specifications.setValue(
      this.specifications.value.filter((field) => field.id !== id)
    );
  }

  get name(): FormControl {
    return this.form.controls.name;
  }
}
