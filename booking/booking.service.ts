// Common booking service

import { Booking } from './models/booking';
import { DBService } from '../db/db.service';
import {BookingQueries} from "./queries/booking.queries";
import { config } from 'dotenv';
import { Caregiver } from '../caregiver/models/caregiver';
import axios from 'axios';
import { NotifyMethod } from './models/notifyMethod';
config();

export class BookingService {
  
  
  private dbService: DBService;

  constructor() {
    this.dbService = new DBService();
  }

  public async createBooking(booking: Booking): Promise<Booking> {
    // Generate booking code for the booking
    const generatedBookingCode = this.generateBookingCode();

    // Assign the generated booking code to the booking
    const newBooking: Booking = {
      ...booking,
      bookingCode: generatedBookingCode
    };

    // Save the booking to the database
    const query = BookingQueries.SAVE_BOOKING;
    const values = [
        newBooking.bookingCode,
        newBooking.caregiverId,
        newBooking.parentId,
        newBooking.startDateTime,
        newBooking.endDateTime,
        newBooking.status,
        newBooking.createdOn,
        newBooking.createdBy
    ];

    await this.dbService.query(query , values);
    return newBooking;
  }
  private generateBookingCode(): string {
    // Generate a unique booking code
    // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characters = process.env.BOOKING_CODE_CAHARACTERS || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 8;
    let bookingCode = '';
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      bookingCode += characters.charAt(randomIndex);
    }
    return bookingCode;
  }  

  public async notifyCaregiver(caregiverId: number, bookingDetails: Booking) {
    // [TASK] TO be continued!!!!    
    try {
        const notifyEndpoint = `http://your-api-domain.com/api/caregivers/${caregiverId}/booking/notify`;
        const notifyData = {
          bookingDetails: bookingDetails,
        };
        await axios.post(notifyEndpoint, notifyData);
        console.log('Notification sent to caregiver');
      } catch (error) {
        console.error('Failed to notify caregiver:', error);
      }
    }


  async getCaregiverById(caregiverId: number) : Promise<any>{
    // [TASK] TO be implemented
    return;
  }
}
