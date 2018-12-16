import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, NgModule, EventEmitter, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private registerURL="http://localhost:3000/api/register"
  private loginURL="http://localhost:3000/api/login"
  userDataEvent = new EventEmitter<any>();
  constructor(private http:HttpClient,private router:Router) { }
  registeruser(user){
    return this.http.post<any>(this.registerURL, user)
  
  }

  loginuser(user){
    return this.http.post<any>(this.loginURL, user)
   }
   loggedIn(){
     return !!localStorage.getItem('token')
   }
   logoutUser(){
     localStorage.removeItem('token')
     this.router.navigate(['/events'])
   }
   getToken(){
     return localStorage.getItem('token')
   }

}
