import express from 'express';
import { query } from 'express-validator';
import { CaregiverSearchController } from './caregiver-search.controller';

const router = express.Router();

// Validation rules
const caregiverSearchValidation = [
  query('locationId').optional().isInt().withMessage('Location ID must be an integer'),
  query('availabilityId').optional().isInt().withMessage('Availability ID must be an integer'),
  query('hourlyRate').optional().isFloat().withMessage('Hourly rate must be a number'),
];

// Routes
router.get('/', caregiverSearchValidation, CaregiverSearchController.searchCaregivers);

export default router;
