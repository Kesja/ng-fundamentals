import { Error404Component } from './errors/404.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
} from '../events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from "./nav/navbar.component";
import { RouterModule } from '@angular/router';

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
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreatEvent',
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
