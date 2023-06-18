import { Booking } from "./models/booking";


export class NotifyService {

    // [TASK] implement the 2 methods below

    async sendSMSNotification(mobileNumber: string, bookingDetails: Booking) {
        throw new Error('Method not implemented.');
    }
    async sendEmailNotification(email: string, bookingDetails: Booking) {
        throw new Error('Method not implemented.');
    }

}