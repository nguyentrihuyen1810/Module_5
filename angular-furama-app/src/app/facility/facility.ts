export class Facility {
  serviceId: number;
  serviceName: string;
  area: number;
  rentalCosts: number;
  maxPeople: number;
  roomStandard: string;
  poolArea: number;
  floor: number;

  constructor(serviceId?:number, serviceName?:string, area?:number, rentalCosts?:number, maxPeople?:number,
              roomStandard?:string, poolArea?:number, floor?:number,){
    this.serviceId= serviceId;
    this.serviceName= serviceName;
    this.area= area;
    this.rentalCosts= rentalCosts;
    this.maxPeople= maxPeople;
    this.roomStandard= roomStandard;
    this.poolArea= poolArea;
    this.floor= floor;
  };
}
