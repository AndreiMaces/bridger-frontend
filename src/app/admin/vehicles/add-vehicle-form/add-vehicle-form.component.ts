import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateVehicleDTO } from '../../../_core/DTOs/CreateVehicleDTO';
import { VehicleType } from '../../../_core/enums/VehicleTypes';
import { VehicleControllerService } from '../../../_core/api/vehicle-controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle-form',
  templateUrl: './add-vehicle-form.component.html',
  styleUrls: ['./add-vehicle-form.component.scss'],
})
export class AddVehicleFormComponent {
  firstCategoryList: string[] = ['Land Cruiser', 'Land Rover', 'Other'];
  secondCategoryList: string[] = ['In Stock', 'Out of Stock'];

  addVehicleForm = new FormGroup({
    firstSection: new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required, Validators.min(1)]),
      firstCategory: new FormControl('', [Validators.required]),
      secondCategory: new FormControl('', [Validators.required]),
    }),
    imageURL: new FormControl('', [Validators.required]),
    images: new FormControl('', [Validators.required]),
    gallery: new FormControl('', [Validators.required]),
    engine: new FormControl('', [Validators.required]),
    performanceUpgrades: new FormControl('', [Validators.required]),
    interior: new FormControl('', [Validators.required]),
    exterior: new FormControl('', [Validators.required]),
    features: new FormControl('', [Validators.required]),
    shopLink: new FormControl('', [Validators.required]),
    dimensions: new FormControl('', [Validators.required]),
    videoTitle: new FormControl('', [Validators.required]),
    videoDescription: new FormControl('', [Validators.required]),
    videoLink: new FormControl('', [Validators.required]),
    specifications: new FormControl([]),
  });

  constructor(
    private vehicleController: VehicleControllerService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.addVehicleForm.markAllAsTouched();
    console.log(this.createPayload());
    if (this.addVehicleForm.valid)
      this.vehicleController.createVehicle(this.createPayload()).subscribe({
        next: () => {
          this.router.navigate(['/admin/vehicles']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  createPayload(): CreateVehicleDTO {
    return {
      type: this.getVehicleTypeIndex(this.firstCategory.value as string),
      name: this.name.value as string,
      price: this.price.value as number,
      inStock: this.secondCategory.value === 'In stock',
      shopLink: this.shopLink.value as string,
      avatar: this.imageURL.value as string,
      description: this.videoDescription.value as string,
      videoLink: this.videoLink.value as string,
      videoTitle: this.videoTitle.value as string,
      videoDescription: this.videoDescription.value as string,
      engine: this.engine.value as string,
      performanceUpgrades: this.performanceUpgrades.value as string,
      interior: this.interior.value as string,
      exterior: this.exterior.value as string,
      dimensions: this.dimensions.value as string,
      gallery: this.gallery.value as string[],
      specifications: this.specifications.value.map(
        (field: { description: FormControl; name: string }) => {
          return {
            name: field.name,
            description: field.description.value,
          };
        }
      ),
    } as CreateVehicleDTO;
  }

  getVehicleTypeIndex(vehicleType: string): VehicleType {
    if (vehicleType === 'Land Rover') return VehicleType.LandRover;
    if (vehicleType === 'Land Cruiser') return VehicleType.LandCruiser;
    return VehicleType.Other;
  }

  get firstSection(): FormGroup<{
    name: FormControl<string>;
    price: FormControl<number>;
    firstCategory: FormControl<string>;
    secondCategory: FormControl<string>;
  }> {
    return this.addVehicleForm.controls.firstSection;
  }

  get specifications(): FormControl {
    return this.addVehicleForm.controls.specifications;
  }

  get name(): FormControl {
    return this.firstSection.controls.name;
  }

  get price(): FormControl {
    return this.firstSection.controls.price;
  }

  get firstCategory(): FormControl {
    return this.firstSection.controls.firstCategory;
  }

  get secondCategory(): FormControl {
    return this.firstSection.controls.secondCategory;
  }

  get shopLink(): FormControl {
    return this.addVehicleForm.controls.shopLink;
  }

  get engine(): FormControl {
    return this.addVehicleForm.controls.engine;
  }

  get videoDescription(): FormControl {
    return this.addVehicleForm.controls.videoDescription;
  }

  get imageURL(): FormControl {
    return this.addVehicleForm.controls.imageURL;
  }

  get images(): FormControl {
    return this.addVehicleForm.controls.images;
  }

  get gallery(): FormControl {
    return this.addVehicleForm.controls.gallery;
  }

  get videoTitle(): FormControl {
    return this.addVehicleForm.controls.videoTitle;
  }

  get videoLink(): FormControl {
    return this.addVehicleForm.controls.videoLink;
  }

  get performanceUpgrades(): FormControl {
    return this.addVehicleForm.controls.performanceUpgrades;
  }

  get interior(): FormControl {
    return this.addVehicleForm.controls.interior;
  }

  get exterior(): FormControl {
    return this.addVehicleForm.controls.exterior;
  }

  get dimensions(): FormControl {
    return this.addVehicleForm.controls.dimensions;
  }

  get features(): FormControl {
    return this.addVehicleForm.controls.features;
  }
}
