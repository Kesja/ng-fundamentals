import { EventRouteActivator } from './../events/events-details/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { Routes } from '@angular/router';
import { EventDetailsComponent } from './../events/events-details/event-details.component';
import { EventsListComponent } from "src/events/events-list.component";
import { CreateEventComponent } from 'src/events/create-event.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
