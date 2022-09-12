import { Component, OnInit } from '@angular/core';
import {Facility} from "../facility/facility";

const Facilities :Facility[]=[
  {
    serviceId: 1,
    serviceName: "a",
    area: 5,
    rentalCosts: 5,
    maxPeople: 5,
    roomStandard: "abc",
    poolArea: 5,
    floor: 5
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
