import { Request, Response } from 'express';
import { Notify } from '../models/notify';
import { BookingService } from '../booking.service';
import { NotifyService } from '../notify.service';
import { Caregiver } from '../../caregiver/models/caregiver';

export class NotifyController {
    
   static async sendNotification(req: Request, res: Response) {
    const bookingService = new BookingService();
    const notifyService = new NotifyService();

    const caregiverId = req.params.caregiverId;
    const notifyData: Notify = req.body;

    // Get caregiver details from the database or any other data source
    const caregiver = await bookingService.getCaregiverById(Number.parseInt(caregiverId));

    // [TASK] based on caregiverId get the notify methods

    if (!caregiver) {
      // [TASK] HANDLE ERRORS
      res.status(404).json({ error: 'Caregiver not found' });
      return;
    }

    // Should be replaced with Caregiver data retuned from DB
    const sendEmail = true;
    const sendSMS = true;


    // Send email notification
    if (sendEmail) {
        // TASK [Update table caregiver to have email and update the model]
        notifyService.sendEmailNotification("EMAIL", notifyData.bookingDetails);
    }

    // Send SMS notification
    if (sendSMS) {
        notifyService.sendSMSNotification(caregiver.mobileNumber, notifyData.bookingDetails);
    }

    // [TASK] HANDLE SUCEES MESSAGES
    res.status(200).json({ message: 'Notification sent successfully' });
  }
  
}
