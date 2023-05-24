import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  vehiclesSortOptions = ['Option 1', 'Option 2'];
  selectedOption: string;
  searchValue: FormControl = new FormControl<string>("");

  constructor(private router: Router) {}

  goToAddVehicle(): void {
    this.router.navigate(['/admin/vehicles/create']);
  }

  showSelectedOptions(selectedOption: MatSelectChange): void {
    this.selectedOption = selectedOption.value;
  }
}
