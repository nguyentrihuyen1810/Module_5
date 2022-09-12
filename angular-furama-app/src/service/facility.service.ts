import { Injectable } from '@angular/core';
import {FacilityDao} from "../app/data/FacilityDao";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  saveFacility(facility) {
    FacilityDao.facility.push(facility);
  }

  getAll() {
    return FacilityDao.facility;
  }

  constructor() { }
}
