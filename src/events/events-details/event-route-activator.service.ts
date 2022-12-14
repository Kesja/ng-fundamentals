import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "src/events/shared/event.service";
import { Observable } from "rxjs";

@Injectable()
export class EventRouteActivator implements CanActivate{

  constructor(private eventService: EventService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot):any {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if(!eventExists) {
      this.router.navigate(['/404']);
      return eventExists;
    }
  }
}
