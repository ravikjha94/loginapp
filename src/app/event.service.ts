import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {
private url="http://localhost:3000/api/events";
private url1="http://localhost:3000/api/special";
  constructor(private http:HttpClient) { }
  getevent(){
    return this.http.get<any>(this.url)
  }
  getSpecialEvent(){
    return this.http.get<any>(this.url1)
  }
}
