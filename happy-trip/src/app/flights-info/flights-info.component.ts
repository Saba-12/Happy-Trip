import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import flightData from '../flights.json'
import { Booking } from '../model/booking';
import { BookingComponent } from '../booking/booking.component';
import { Passenger } from '../model/passenger';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flights-info',
  templateUrl: './flights-info.component.html',
  styleUrls: ['./flights-info.component.css']
})
export class FlightsInfoComponent implements OnInit {
  flights: Flight[];
  @Input() passenger: Passenger;
  booking: Booking = new Booking;
  flightNo: number;
  constructor(private route: Router) {
    this.passenger = new Passenger;
  }

  ngOnInit(): void {
    this.flights = flightData;
  }
  bookTicket(item) {
    this.flightNo = item;
    console.log(item);
    this.route.navigate(["booking"]);
  }
  addPass(item) {
    this.booking.passenger = item;
    this.booking.flightNo = this.flightNo;
    console.log("done " + this.booking.passenger.PName + " " + this.booking.flightNo);
  }
}
