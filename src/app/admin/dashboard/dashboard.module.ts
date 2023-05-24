import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OverviewCardComponent } from './overview-card/overview-card.component';
import { LocalSharedModule } from '../../shared/local-shared.module';

@NgModule({
  declarations: [DashboardComponent, OverviewCardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    LocalSharedModule,
  ],
})
export class DashboardModule {}
