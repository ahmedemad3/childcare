import { Caregiver } from '../models/caregiver';
import { DBService } from "../../db/db.service";
import {Caregiver_Queries } from "../queries/caregiver.queries";

export class CaregiverService {
  private DBService: DBService;

  constructor() {
    this.DBService = new DBService();
  }

  async createCaregiver(caregiver: Caregiver): Promise<Caregiver> {
   
    const query = Caregiver_Queries.CREATE_CAREGIVER;

    const values = [
      caregiver.name,
      caregiver.description,
      caregiver.userId,
      caregiver.mobileNumber,
      caregiver.locationId,
      caregiver.hourlyRate,
      caregiver.availabilityId,
      caregiver.createdAt,
      caregiver.createdBy
    ];

    const result = await this.DBService.query(query, values);

    if (result.rows.length === 0) {
      throw new Error('Failed to create caregiver profile');
    }
    
    return result.rows[0];
  }
}
