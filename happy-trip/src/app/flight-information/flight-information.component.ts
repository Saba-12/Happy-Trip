import { Component, OnInit } from '@angular/core';
import flightdata from "src/app/flight-data.json";
import {Flight} from "src/app/Model/flight";

// interface flight{
//     img:string;
//     flightNo:number;
//     arrivalTime:string;
//     departure:string;
//     seatsAvailable:number;
//     TicketPrice:number;
// }

@Component({
  selector: 'app-flight-information',
  templateUrl: './flight-information.component.html',
  styleUrls: ['./flight-information.component.css']
})

export class FlightInformationComponent implements OnInit {

  flights:Flight[];
  
  constructor() { }

  ngOnInit(): void {
    this.flights=flightdata;
  }

}
