import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenanttwodashboardComponent } from './tenanttwodashboard/tenanttwodashboard.component';

const routes: Routes = [
   {path:'',component:TenanttwodashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tenant2RoutingModule { }
