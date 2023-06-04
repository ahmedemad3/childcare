import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Caregiver } from '../models/caregiver';
import { CaregiverService } from './caregiver.service';

export class CaregiverController {
  
  static async createCaregiverProfile(req: Request, res: Response): Promise<Response> {
    try {

      const caregiverService = new CaregiverService();
      // Validate request
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Extract request body
      const { name, description, userId, mobileNumber, locationId, hourlyRate, availabilityId } = req.body;

      // Create caregiver profile
      const caregiver = new Caregiver(0,name, description, userId, mobileNumber, locationId, hourlyRate, availabilityId , new Date(),"" , new Date() , "");
      const createdProfile = await caregiverService.createCaregiver(caregiver)

      return res.status(201).json(createdProfile);
    } catch (error) {
      console.error('Error creating caregiver profile:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
