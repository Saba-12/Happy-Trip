import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../model/booking';
import { Passenger } from '../model/passenger';
import { Payment } from '../model/payment';
import { FlightDataService } from '../services/flight-data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  passenger: Passenger;
  validDOB: boolean;
  DOB: Date = new Date;
  today: Date;
  constructor(private router: Router, private service: FlightDataService) {
    this.passenger = new Passenger;
    this.validDOB = false;
    this.today = new Date();
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.service.setPassenger(this.passenger);
    this.DOB = this.passenger.DOB;
    this.router.navigate(['payment']);
  }
  checkDOB() {
    if (this.ageCalculator() >= 18) {
      this.validDOB = true;
      console.log("18+");
    }
    else {
      console.log("below 18");
      this.passenger.DOB = null;
    }
  }
  ageCalculator(): number {
    if (this.passenger.DOB) {
      const convertAge = new Date(this.passenger.DOB);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
    return 0;
  }
}

