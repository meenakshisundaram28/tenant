import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; 
  private id : any;
   constructor(private http: HttpClient) { }
 
    login(value:any): Observable<User> {
      console.log(this.http.post<User>(`${this.apiUrl}`, value))
     return this.http.post<User>(`${this.apiUrl}`, value);
   }

   setUser(value:string):void{
    localStorage.setItem('userRole', value)
 }

 getUser(): string | null {
   return localStorage.getItem('userRole');
 }
}
