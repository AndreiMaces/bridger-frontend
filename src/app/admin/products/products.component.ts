import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productsSortOptions = ['Option 1', 'Option 4'];
  selectedOption: string;
  searchValue: FormControl = new FormControl<string>('');

  constructor(private router: Router) {}

  goToAddProduct(): void {
    this.router.navigate(['/admin/products/create']);
  }

  showSelectedOptions(selectedOption: MatSelectChange): void {
    this.selectedOption = selectedOption.value as string;
  }
}
