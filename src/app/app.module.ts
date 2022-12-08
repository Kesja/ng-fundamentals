import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from "../events/events-list.component";

@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent
    ],
    providers: [],
    bootstrap: [EventsAppComponent],
    imports: [
        BrowserModule,

    ]
})
export class AppModule { }
