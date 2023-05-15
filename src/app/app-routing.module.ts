import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'button', component: ButtonComponent},
  {path: 'accordion', component: AccordionComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
