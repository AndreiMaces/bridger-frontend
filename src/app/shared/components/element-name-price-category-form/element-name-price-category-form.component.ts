import {Component, Input} from '@angular/core';
import {InputType} from '../../../_core/enums/InputType';
import {LabelType} from '../../../_core/enums/LabelType';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-element-name-price-category-form',
  templateUrl: './element-name-price-category-form.component.html',
  styleUrls: ['./element-name-price-category-form.component.scss'],
})
export class ElementNamePriceCategoryFormComponent {
  InputType = InputType;
  LabelType = LabelType;
  @Input() firstCategoryList: string[];
  @Input() secondCategoryList: string[];
  @Input() form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    firstCategory: new FormControl("", [Validators.required]),
    secondCategory: new FormControl("", [Validators.required]),
  })

  get name()
  {
    return this.form.controls.name;
  }

  get price()
  {
    return this.form.controls.price;
  }

  get firstCategory()
  {
    return this.form.controls.firstCategory;
  }

  get secondCategory()
  {
    return this.form.controls.secondCategory;
  }

}
