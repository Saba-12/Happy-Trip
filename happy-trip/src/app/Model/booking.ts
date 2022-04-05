import { Flight } from "./flight";
import { Passenger } from "./passenger";
import { Payment } from "./payment";

export class Booking {
    flight: Flight;
    passenger: Passenger;
    payment: Payment;
}
