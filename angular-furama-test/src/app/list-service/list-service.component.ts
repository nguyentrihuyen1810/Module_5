import { Component, OnInit } from '@angular/core';

export interface Facility {
  serviceId?: number;
  serviceName?: string;
  area?: number;
  rentalCosts?: number;
  maxPeople?: number;
  roomStandard?: string;
  poolArea?: number;
  floor?: number;
}

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  facility: Facility [] = [
    {
      serviceId: 1,
      serviceName: 'Diamond Hotel (Room)',
      area: 30,
      rentalCosts: 2000000,
      maxPeople: 2,
      roomStandard: 'Vip',
      poolArea: 0,
      floor: 0,
    },
    {
      serviceId: 2,
      serviceName: 'House',
      area: 50,
      rentalCosts: 5000000,
      maxPeople: 6,
      roomStandard: 'Vip',
      poolArea: 20,
      floor: 2,
    },
    {
      serviceId: 3,
      serviceName: 'Villa',
      area: 100,
      rentalCosts: 10000000,
      maxPeople: 10,
      roomStandard: 'Normal',
      poolArea: 50,
      floor: 1,
    },
    {
      serviceId: 4,
      serviceName: 'House',
      area: 60,
      rentalCosts: 6000000,
      maxPeople: 7,
      roomStandard: 'Normal',
      poolArea: 0,
      floor: 2,
    },
    {
      serviceId: 5,
      serviceName: 'Villa',
      area: 150,
      rentalCosts: 15000000,
      maxPeople: 15,
      roomStandard: 'Vip',
      poolArea: 0,
      floor: 2,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
