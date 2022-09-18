import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../model/CustomerType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  URL = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) { }

  getAllType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.URL);
  }
}
