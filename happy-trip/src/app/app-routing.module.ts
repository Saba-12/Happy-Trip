import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { FlightsInfoComponent } from './flights-info/flights-info.component';

const routes: Routes = [
  {
    path: '', component: FlightsInfoComponent
  },
  {
    path: 'booking', component: BookingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
