import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tenant2RoutingModule } from './tenant2-routing.module';
import { TenanttwodashboardComponent } from './tenanttwodashboard/tenanttwodashboard.component';



@NgModule({
  declarations: [
    TenanttwodashboardComponent
  ],
  imports: [
    CommonModule,
    Tenant2RoutingModule
  ],
  bootstrap: [TenanttwodashboardComponent]
})
export class Tenant2Module { }
