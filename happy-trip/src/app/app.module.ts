import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsInfoComponent } from './flights-info/flights-info.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { ShowBookingComponent } from './show-booking/show-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsInfoComponent,
    BookingComponent,
    PaymentComponent,
    ShowBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
