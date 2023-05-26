import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LocalSharedModule } from '../../shared/local-shared.module';
import { QRCodeModule } from 'angularx-qrcode';
import { NgChartsModule } from 'ng2-charts';
import { GyroscopeChartComponent } from './gyroscope-chart/gyroscope-chart.component';
import { DeviceComponent } from './device/device.component';
import { CubeComponent } from './cube/cube.component';
import { LightChartComponent } from './light-chart/light-chart.component';

@NgModule({
  declarations: [DashboardComponent, GyroscopeChartComponent, DeviceComponent, CubeComponent, LightChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    LocalSharedModule,
    QRCodeModule,
    NgChartsModule,
  ],
})
export class DashboardModule {}
