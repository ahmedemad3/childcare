import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { CaregiverSearch } from '../models/caregiver-search';
import { CaregiverSearchService } from './caregiver-search.service';

export class CaregiverSearchController {
  

  static async searchCaregivers(req: Request, res: Response): Promise<Response> {
    try {

      const caregiverSearchService = new CaregiverSearchService();
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Extract query parameters
      const locationId = req.query.locationId ? parseInt(req.query.locationId as string, 10) : undefined;
      const availabilityId = req.query.availabilityId ? parseInt(req.query.availabilityId as string, 10) : undefined;
      const hourlyRate = req.query.hourlyRate ? parseFloat(req.query.hourlyRate as string) : undefined;

   

      // Create caregiver search object
      const caregiverSearch = new CaregiverSearch(locationId , availabilityId , hourlyRate);

      // Search for caregivers
      const caregivers = await caregiverSearchService.searchCaregivers(caregiverSearch);

      return res.status(200).json(caregivers);
    } catch (error) {
      console.error('Error searching for caregivers:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
