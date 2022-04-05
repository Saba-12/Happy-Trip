import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../model/booking';
import { Payment } from '../model/payment';
import { FlightDataService } from '../services/flight-data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment: Payment;
  booking: Booking;
  today: Date;
  exp: Date;
  constructor(private service: FlightDataService, private router:Router) {
    this.payment = new Payment;
    this.booking = new Booking;
    this.today = new Date();
    this.exp = new Date();
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.service.setPayment(this.payment);
    this.booking = this.service.getBooking();
    console.log(this.booking.flight.flightNo + " " + this.booking.passenger.PName + " " + this.booking.payment.cardType);
    this.router.navigate(['show']);
  }
  validateExpDate() {
    const convertAge = new Date(this.payment.expiryDate);
    const timeDiff = (Date.now() - convertAge.getTime());
    if (timeDiff >= 0)
      this.payment.expiryDate = null;
  }
}
