import express from 'express';
import { body } from 'express-validator';
import { CaregiverController } from './caregiver-profile.controller';

const router = express.Router();

// Validation rules
const caregiverProfileValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('userId').notEmpty().withMessage('User ID is required'),
  body('mobileNumber').notEmpty().withMessage('Mobile number is required'),
  body('locationId').notEmpty().withMessage('Location ID is required'),
  body('hourlyRate').notEmpty().withMessage('Hourly rate is required').isNumeric().withMessage('Hourly rate must be a number'),
  body('availabilityId').notEmpty().withMessage('Availability ID is required'),
];

// Routes
router.post('/', caregiverProfileValidation,CaregiverController.createCaregiverProfile);

export default router;
