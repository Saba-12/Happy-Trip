import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { Passenger } from '../model/passenger';
import { FlightDataService } from '../services/flight-data.service';

@Component({
  selector: 'app-show-booking',
  templateUrl: './show-booking.component.html',
  styleUrls: ['./show-booking.component.css']
})
export class ShowBookingComponent implements OnInit {
  passenger: Passenger;
  flight: Flight;
  constructor(private service: FlightDataService) {
    this.passenger = service.getBooking().passenger;
    this.flight = service.getFlightDetail();
   }

  ngOnInit(): void {
  }

}
