import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';
import { AddVehicleFormComponent } from './add-vehicle-form/add-vehicle-form.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
  },
  {
    path: 'create',
    component: AddVehicleFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclesRoutingModule {}
