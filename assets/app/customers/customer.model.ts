export class Customer {
  name: string;
  ownerName: string;
  customerId: string;
  userId: string;

constructor(name: string, ownerName?: string, customerId?: string, userId?: string){
  this.name = name;
  this.ownerName = ownerName;
  this.customerId = customerId;
  this.userId = userId;
  }

}