export class NotifyMethod{
    sendEmail: boolean;
    sendSMS: boolean;

    constructor(sendEmail: boolean ,  sendSMS: boolean){
        this.sendEmail = sendEmail;
        this.sendSMS = sendSMS;
    }
}