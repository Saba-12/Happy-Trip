import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { FlightsInfoComponent } from '../flights-info/flights-info.component';
import { Passenger } from '../model/passenger';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent extends FlightsInfoComponent implements OnInit {
  ticket: Passenger = new Passenger;
  private router: Router;
  fNo: number;
  onSubmit() {
    console.log(this.flightNo);
    this.addPass(this.ticket);
    this.router.navigate(['']);
  }
}

