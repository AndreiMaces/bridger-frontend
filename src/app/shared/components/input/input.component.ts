import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputType } from '../../../_core/enums/InputType';
import { LabelType } from '../../../_core/enums/LabelType';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() styleClass: string;
  @Input() label: string;
  @Input() inputType = InputType.TEXT;
  @Input() labelType = LabelType.InnerLabel;
  @Input() control: FormControl;
  @Input() name: string;
  @Input() list: string[];
  @Output() selectedValueChange = new EventEmitter<string>();
  @Input() selectedValue: string;
  isOfPasswordType = false;
  LabelType = LabelType;
  InputType = InputType;

  ngOnInit(): void {
    this.isOfPasswordType = this.inputType === InputType.PASSWORD;
  }

  togglePasswordVisible(): void {
    if (this.inputType === InputType.TEXT) this.inputType = InputType.PASSWORD;
    else this.inputType = InputType.TEXT;
  }
}
