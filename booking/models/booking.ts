export class Booking {
    id: number;
    bookingCode : string;
    caregiverId: number;
    parentId: number;
    startDateTime: Date;
    endDateTime: Date;
    status: string;
    createdOn: Date;
    createdBy: string;
    updatedOn: Date;
    updatedBy: string;

    constructor(id: number , bookingCode : string, caregiverId: number ,  parentId: number , startDateTime: Date , endDateTime: Date ,
        status: string , createdOn: Date , createdBy: string ,  updatedOn: Date , updatedBy: string){
            this.id = id;
            this.bookingCode = bookingCode;
            this.caregiverId = caregiverId;
            this.parentId = parentId;
            this.startDateTime = startDateTime;
            this.endDateTime = endDateTime;
            this.status = status;
            this.createdOn = createdOn;
            this.createdBy = createdBy;
            this.updatedOn = updatedOn;
            this.updatedBy = updatedBy;
    }

    
  }
  