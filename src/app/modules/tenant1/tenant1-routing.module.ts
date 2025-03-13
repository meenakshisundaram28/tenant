import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantonedashboardComponent } from './tenantonedashboard/tenantonedashboard.component';

const routes: Routes = [
  {path:'',component:TenantonedashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tenant1RoutingModule { }
