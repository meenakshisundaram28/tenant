import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  { 
    path: 'tenant1', 
   loadChildren :()=> import('./modules/tenant1/tenant1.module').then(m =>m.Tenant1Module)
  },
  { 
    path: 'tenant2', 
    loadChildren: () => import('./modules/modules/tenant2/tenant2.module').then(m => m.Tenant2Module), 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
