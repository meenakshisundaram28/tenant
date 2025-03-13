import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-tenantonedashboard',
  standalone: false,
  templateUrl: './tenantonedashboard.component.html',
  styleUrl: './tenantonedashboard.component.css'
})
export class TenantonedashboardComponent implements OnInit {

  usertype:any

  constructor(private api:AuthService){}


  ngOnInit(): void {
    this.usertype= this.api.getUser()
    console.log(this.usertype)
  }


}
