import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent {
  firstCategoryList: string[] = [
    'Caps',
    'Dacia Logan',
    'Lamborghini',
    'Caruta',
  ];
  secondCategoryList: string[] = [
    'Black',
    'Dacia Logan',
    'Lamborghini',
    'Caruta',
  ];
  addProductForm = new FormGroup({
   productInfo: new FormGroup({
     name: new FormControl('', Validators.required),
     price: new FormControl(0, [Validators.required, Validators.min(1)]),
     firstCategory: new FormControl(''),
     secondCategory: new FormControl(''),
   }),
    imageURL: new FormControl(''),
  });

  onSubmit(): void {
    this.addProductForm.markAllAsTouched();
  }

  get name(): FormControl {
    return this.addProductForm.controls.productInfo.controls.name;
  }

  get price(): FormControl {
    return this.addProductForm.controls.productInfo.controls.price;
  }

  get firstCategory(): FormControl {
    return this.addProductForm.controls.productInfo.controls.firstCategory;
  }

  get secondCategory(): FormControl {
    return this.addProductForm.controls.productInfo.controls.secondCategory;
  }

  get imageUrl(): FormControl {
    return this.addProductForm.controls.imageURL;
  }

  get productInfo(): FormGroup {
    return  this.addProductForm.controls.productInfo as FormGroup;
  }
}
