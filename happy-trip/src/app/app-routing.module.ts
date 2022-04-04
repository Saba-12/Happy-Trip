import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightInformationComponent } from './flight-information/flight-information.component';

const routes: Routes = [
  {path:"",component:FlightInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
