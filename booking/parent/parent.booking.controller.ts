/**
 * // Create booking by parent [Notify , Generate booking code]
 *  // get all booking based on [booking status] for parentID
 *  // get booking by id
 *  // Delete booking BY ID [3 TASKS]
 */

import { Request, Response } from 'express';
import { Booking } from '../models/booking';
import { BookingService } from '../booking.service';

export class BookingController {


  static async createBooking(req: Request, res: Response) {

    const bookingService = new BookingService();

    const { caregiverId, parentId, startDateTime, endDateTime } = req.body;

    // Set the initial status of the booking
    const status = 'Pending';

    const newBooking: Booking = {
      id: 0, // Generated ID will be assigned by the service
      bookingCode: "-1",
      caregiverId,
      parentId,
      startDateTime,
      endDateTime,
      status,
      createdOn: new Date(),
      createdBy: 'API',
      updatedOn: new Date(),
      updatedBy: 'API',
    };

    // Save the new booking
    const createdBooking = await bookingService.createBooking(newBooking);

    if (!createdBooking) {
      // [TASK] HANDLE ERROR WITH CODE AND MESSAGE
        res.status(500).json({ error: 'Failed to create booking' });
        return;
      }

    // Notify caregiver with booking via API endpoint (You can define the specific endpoint for caregiver notification)
    // [TASK] We need to adding preferred notifcation method in caregiver table 

    bookingService.notifyCaregiver(createdBooking.caregiverId, createdBooking);

    res.status(201).json(createdBooking);
  }
}
