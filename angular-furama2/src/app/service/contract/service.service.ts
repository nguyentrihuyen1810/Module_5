import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../../data/customer/CustomerType';
import {Service} from '../../data/contract/Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL = ' http://localhost:3000/service';

  constructor(private http: HttpClient) { }

  getAllType(): Observable<Service[]> {
    return this.http.get<Service[]>(this.URL);
  }
}
