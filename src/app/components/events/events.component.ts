import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 event=[
]
  constructor(private eventService:EventService) { }

  ngOnInit() {
 this.eventService.getevent()
 .subscribe(res=>
  this.event=res,
  err=>console.log(err )

 )}
}
