import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
specialevent=[]
  constructor(private eventService:EventService,private router:Router) { }

  ngOnInit() {
    
this.eventService.getSpecialEvent()
.subscribe(
  res=>this.specialevent=res,
  err=>{
    if(err instanceof HttpErrorResponse){
      if(err.status === 401){
        this.router.navigate(['/login'])

      }
    }
  })

  }

}
