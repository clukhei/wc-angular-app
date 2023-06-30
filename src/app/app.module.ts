import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'clk-web-components';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AttributeComponent } from './attribute/attribute.component';
import { SlotComponent } from './slot/slot.component'
import { AdDirective } from './ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    AttributeComponent,
    SlotComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
