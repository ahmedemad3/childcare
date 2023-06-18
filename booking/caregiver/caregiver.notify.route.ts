import express from 'express';
import { NotifyController } from './caregiver.notify.controller';

const router = express.Router();

// POST /api/caregivers/:caregiverId/bookings/notify
router.post('/', NotifyController.sendNotification);

export default router;
