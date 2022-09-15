import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../../data/customer/CustomerType';

class ServiceType {
}

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  URL = 'http://localhost:3000/serviceType';

  constructor(private http: HttpClient) { }

  getAllType(): Observable<ServiceType[]> {
    return this.http.get<ServiceType[]>(this.URL);
  }
}
