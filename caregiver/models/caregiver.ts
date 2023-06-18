export class Caregiver {

    // Dont forget to add Email & Notify Methods
    id: number;
    name: string;
    description: string;
    userId: number;
    mobileNumber: string;
    locationId: number;
    hourlyRate: number;
    availabilityId: number;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;

    constructor(
       id: number,
       name: string,
       description: string,
       userId: number,
       mobileNumber: string,
       locationId: number,
       hourlyRate: number,
       availabilityId: number,
       createdAt: Date,
       createdBy: string,
       updatedAt: Date,
       updatedBy: string
    ) {
        this.id = id;
        this.name = name;
        this.description= description,
        this.userId = userId,
        this.mobileNumber = mobileNumber,
        this.locationId = locationId,
        this.hourlyRate = hourlyRate,
        this.availabilityId = availabilityId,
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.updatedAt = updatedAt;
        this.updatedBy = updatedBy;

    } 
  }
  