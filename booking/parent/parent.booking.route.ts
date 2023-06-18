import { Router } from 'express';
import { BookingController } from './parent.booking.controller';

const router = Router();

// need to add express validator [TASK] 

router.post('/', BookingController.createBooking);

export default router;
