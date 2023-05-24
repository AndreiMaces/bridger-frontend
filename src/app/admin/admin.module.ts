import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {LocalSharedModule} from "../shared/local-shared.module";

@NgModule({
  declarations: [AdminComponent, VehiclesComponent],
    imports: [CommonModule, AdminRoutingModule, MatSidenavModule, MatIconModule, LocalSharedModule],
})
export class AdminModule {}
