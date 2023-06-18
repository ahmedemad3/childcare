import { Booking } from "./booking";
import { NotifyMethod } from "./notifyMethod";

export class Notify {
    notifyMethod? : NotifyMethod
    bookingDetails: Booking;

    constructor(notifyMethod : NotifyMethod , bookingDetails: Booking){
        this.notifyMethod = notifyMethod;
        this.bookingDetails = bookingDetails;
    }
  }
  