import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AttributeComponent } from './attribute/attribute.component';
import { SlotComponent } from './slot/slot.component';

const routes: Routes = [
  {path: 'button', component: ButtonComponent},
  {path: 'accordion', component: AccordionComponent},
  {path: 'events', component: EventsComponent},
  {path: 'attribute', component: AttributeComponent},
  {path: 'slot', component: SlotComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
