import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { AddVehicleFormComponent } from './add-vehicle-form/add-vehicle-form.component';
import { LocalSharedModule } from '../../shared/local-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { videoDescriptionFormComponent } from './add-vehicle-form/vehicle-description-form/vehicle-description-form.component';
import { VehicleSpecificationsFormComponent } from './add-vehicle-form/vehicle-specifications-form/vehicle-specifications-form.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AddVehicleFormComponent,
    videoDescriptionFormComponent,
    VehicleSpecificationsFormComponent,
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    LocalSharedModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class VehiclesModule {}
