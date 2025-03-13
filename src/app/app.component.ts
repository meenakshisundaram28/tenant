import { Component, OnInit } from '@angular/core';
import { SubdomainService } from './services/subdomain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'tenant';

  constructor(private router: Router, private subdomainService: SubdomainService) {}


}
