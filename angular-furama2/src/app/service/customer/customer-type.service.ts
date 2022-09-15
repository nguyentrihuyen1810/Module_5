import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CustomerType} from '../../data/customer/CustomerType';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  URL = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) { }

  getAllType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.URL);
  }

  findByType(nameSearch: string) {
    return this.http.get(this.URL + '?name_like=' + nameSearch);
  }
}
