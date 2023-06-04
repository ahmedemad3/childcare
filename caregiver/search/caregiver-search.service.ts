import { CaregiverSearch } from '../models/caregiver-search';
import { DBService } from "../../db/db.service";
import {Caregiver_Queries } from "../queries/caregiver.queries";

export class CaregiverSearchService {
  private DBService: DBService;

  constructor() {
    this.DBService = new DBService();
  }

  async searchCaregivers(caregiverSearch: CaregiverSearch): Promise<any[]> {
    // Build the SQL query based on the search criteria
    let  query = Caregiver_Queries.CAREGIVER_SEARCH;
    const queryValues: any[] = [];

    if (caregiverSearch.locationId) {
        query += Caregiver_Queries.CAREGIVER_SEARCH_LOCATION ;
      queryValues.push(caregiverSearch.locationId);
    }

    if (caregiverSearch.availabilityId) {
        query +=  Caregiver_Queries.CAREGIVER_SEARCH_AVAILABILTY + `${queryValues.length + 1} ` ;
      queryValues.push(caregiverSearch.availabilityId);
    }

    if (caregiverSearch.hourlyRate) {
        query += Caregiver_Queries.CAREGIVER_SEARCH_HOURLY_RATE + `${queryValues.length + 1} `;
      queryValues.push(caregiverSearch.hourlyRate);
    }

    const result = await this.DBService.query(query, queryValues);

    return result.rows;
  }
}
