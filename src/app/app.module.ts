import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'clk-web-components';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AttributeComponent } from './attribute/attribute.component';
import { SlotComponent } from './slot/slot.component'
import { StepperDirective } from './stepper.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    AttributeComponent,
    SlotComponent,
    StepperDirective
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
