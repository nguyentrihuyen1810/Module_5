import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../data/CustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  API_URL = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) { }

  getAllType(): Observable<CustomerType[]>  {
    return this.http.get<CustomerType[]>(this.API_URL);
  }

  findByType(nameSearch: string) {
    return this.http.get(this.API_URL + '?name_like=' + nameSearch);
  }
}
