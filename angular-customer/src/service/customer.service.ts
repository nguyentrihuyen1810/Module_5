import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  create(customer: Customer) {
    return this.http.post<Customer>(this.API_URL, customer);
  }

  findById(id: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.API_URL}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/' + id);
  }

  update(id: number, customer: Customer) {
    return this.http.put(`${this.API_URL}/${id}`, customer);
  }

  findByName(nameSearch: string) {
    return this.http.get(this.API_URL + '?name_like=' + nameSearch);
  }
}
