import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tenant1RoutingModule } from './tenant1-routing.module';
import { TenantonedashboardComponent } from './tenantonedashboard/tenantonedashboard.component';


@NgModule({
  declarations: [
    TenantonedashboardComponent
  ],
  imports: [
    CommonModule,
    Tenant1RoutingModule
  ]
})
export class Tenant1Module { }
