// subdomain.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubdomainService {
  getSubdomain(): string {
    const host = window.location.hostname;
    const subdomain = host.split('.')[0];
    return subdomain;
  }
}