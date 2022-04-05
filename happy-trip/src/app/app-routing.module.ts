import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { FlightsInfoComponent } from './flights-info/flights-info.component';
import { PaymentComponent } from './payment/payment.component';
import { ShowBookingComponent } from './show-booking/show-booking.component';

const routes: Routes = [
  {
    path: '', component: FlightsInfoComponent
  },
  {
    path: 'booking', component: BookingComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },
  {
    path: 'show', component: ShowBookingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
