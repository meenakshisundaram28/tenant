import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-tenanttwodashboard',
  standalone: false,
  templateUrl: './tenanttwodashboard.component.html',
  styleUrl: './tenanttwodashboard.component.css'
})
export class TenanttwodashboardComponent  implements OnInit {

  usertype:any

  constructor(private api:AuthService){}


  ngOnInit(): void {
    this.usertype= this.api.getUser()
    console.log(this.usertype)
  }

}
