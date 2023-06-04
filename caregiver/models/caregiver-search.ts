export class CaregiverSearch {

    locationId: number | undefined;
    availabilityId: number | undefined;
    hourlyRate: number | undefined;

    // adding rating , adding search by name [3 characters]

    constructor(
      locationId: number | undefined,
      availabilityId: number | undefined,
      hourlyRate: number | undefined
    ) {
        this.locationId = locationId;
        this.availabilityId = availabilityId;
        this.hourlyRate = hourlyRate;

    }
  }
  