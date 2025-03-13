import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../actions/auth.actions';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  tenanttype:any
  usertype:any
  userRole:any=[
    {email:'meenakshi@gmail.com',usetype:'admin',Tenant:'one'},
    {email:'sundaram@gmail.com',usetype:'user',Tenant:'two'},
    {email:'ganesh@gmail.com',usetype:'admin',Tenant:'two'},
    {email:'kumar@gmail.com',usetype:'user',Tenant:'one'},
    {email:'test@gmail.com',usetype:'admin',Tenant:'two'},
    {email:'erumamurugesa@gmail.com',usetype:'user',Tenant:'one'}
  ]

  constructor(private fb: FormBuilder,private api:AuthService,private router: Router,private store: Store) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
   
    if (this.loginForm.valid) {
      if(this.userRole.filter((item:any)=> item.email === this.loginForm.get('email')?.value)){
        debugger
        this.api.login(this.loginForm.getRawValue()).subscribe((data)=>{
          console.log(data)
        if(this.userRole.filter((item:any)=> item.email === data.email)){
          this.tenanttype = this.userRole.filter((item:any)=> item.email === data.email)
          if(this.tenanttype[0].Tenant === 'one'){
            this.store.dispatch(login(this.loginForm.getRawValue()));
            this.api.setUser(this.tenanttype[0].usetype)
            this.router.navigate(['/tenant1']);
          } else if(this.tenanttype[0].Tenant === 'two'){
            this.api.setUser(this.tenanttype[0].usetype)
            this.store.dispatch(login(this.loginForm.getRawValue()));
            this.router.navigate(['/tenant2']);
          }
        }
        })
      }else{
        console.log('error')
      }
    }
  }
}
