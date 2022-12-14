import { Component } from "@angular/core";
import { EventService } from "src/events/shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../event.model";

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent {

  event:IEvent;

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
