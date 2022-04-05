import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';

import flightDetails from '../flights.json';
import flightDetail from '../flights.json';
import { Booking } from '../model/booking';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
  flightsData: Flight[];
  ticket: Booking;
  constructor() {
    this.flightsData = flightDetails;
    this.ticket = new Booking;
  }
  getAllFlightDetails() {
    return this.flightsData;
  }
  setFlightDetail(flight) {
    this.ticket.flight = flight;
  }
  getFlightDetail() {
    return this.ticket.flight;
  }
  setPassenger(passenger) {
    this.ticket.passenger = passenger;
  }
  setPayment(payment) {
    this.ticket.payment = payment;
  }
  getBooking() {
    return this.ticket;
  }
  showData() {
    this.flightsData = flightDetail;
  }
}
