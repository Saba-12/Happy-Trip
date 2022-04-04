import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-information',
  templateUrl: './flight-information.component.html',
  styleUrls: ['./flight-information.component.css']
})
export class FlightInformationComponent implements OnInit {

  flights=[
    {ImgUrl:"https://images.indianexpress.com/2020/05/indigo.jpg",FlightName:"Indigo"}]
  constructor() { }

  ngOnInit(): void {
  }

}
