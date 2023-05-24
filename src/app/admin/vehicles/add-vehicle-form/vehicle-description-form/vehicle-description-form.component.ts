import { Component, Input } from '@angular/core';
import { LabelType } from '../../../../_core/enums/LabelType';
import { InputType } from '../../../../_core/enums/InputType';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-description-form',
  templateUrl: './vehicle-description-form.component.html',
  styleUrls: ['./vehicle-description-form.component.scss'],
})
export class videoDescriptionFormComponent {
  LabelType = LabelType;
  InputType = InputType;
  @Input() videoDescriptionFormControl = new FormControl('');
  @Input() youtubeLinkFormControl = new FormControl('');
  @Input() titleFormControl = new FormControl('');
}
