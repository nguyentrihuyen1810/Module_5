import { Component, OnInit } from '@angular/core';
import {Facility} from "../facility/facility";

const Facilities:Facility[]=[
  {
    serviceId: 1,
    serviceName: "Villa Beach Front",
    area: 25000,
    rentalCosts: 10000000,
    maxPeople: 10,
    roomStandard: "vip",
    poolArea: 500,
    floor: 4
  },
  {
    serviceId: 2,
    serviceName: "House Princess 01",
    area: 14000,
    rentalCosts: 5000000,
    maxPeople: 7,
    roomStandard: "",
    poolArea: 500,
    floor: 3
  },
  {
    serviceId: 3,
    serviceName: "Room Twin 01",
    area: 5000,
    rentalCosts: 1000000,
    maxPeople: 2,
    roomStandard: "normal",
    poolArea: 0,
    floor: 0
  },
  {
    serviceId: 4,
    serviceName: "Villa No Beach Front",
    area: 22000,
    rentalCosts: 9000000,
    maxPeople: 8,
    roomStandard: "normal",
    poolArea: 300,
    floor: 3
  },
  {
    serviceId: 5,
    serviceName: "House Princess 02",
    area: 10000,
    rentalCosts: 4000000,
    maxPeople: 5,
    roomStandard: "normal",
    poolArea: 0,
    floor: 2
  }
];

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  Facility = new Facility();
  Facilities = Facilities;

  constructor() { }

  ngOnInit(): void {
  }

}
