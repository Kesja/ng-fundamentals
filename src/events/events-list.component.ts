import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailclick(event.name)" [event]="event">
          </event-thumbnail>
        </div>
      </div>
    </div>
  `
})

export class EventsListComponent implements OnInit {

  events:any;

  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailclick(eventName: string) {
    this.toastr.success(eventName);
  }

}
