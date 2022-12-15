import { Error404Component } from './errors/404.component';
import { EventService } from './shared/event.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from "../events/events-list.component";
import { EventThumbnailComponent } from "../events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventDetailsComponent } from './../events/events-details/event-details.component';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from 'src/events/create-event.component';
import { EventRouteActivator } from 'src/events/events-details/event-route-activator.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventsAppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
})
export class AppModule {}
