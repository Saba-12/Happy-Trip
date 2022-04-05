import { Flight } from "./flight";
import { Passenger } from "./passenger";
import { Payment } from "./payment";

export class Booking {
    flightNo: number;
    passenger: Passenger;
    payment: Payment;
}
