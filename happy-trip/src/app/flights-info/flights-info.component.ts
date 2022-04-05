import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from '../model/flight';
import { Router,ActivatedRoute } from '@angular/router';
import { FlightDataService } from '../services/flight-data.service';

@Component({
  selector: 'app-flights-info',
  templateUrl: './flights-info.component.html',
  styleUrls: ['./flights-info.component.css']
})
export class FlightsInfoComponent implements OnInit {
  flights: Flight[];
  constructor(private router: Router,private service:FlightDataService) {
  }

  ngOnInit(): void {
    this.flights = this.service.flightsData;
  }
  bookTicket(flight) {
    this.service.setFlightDetail(flight);
    this.router.navigate(['booking']);
  }
}
