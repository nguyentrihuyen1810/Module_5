import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../data/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL);
  }

  create(customer: Customer) {
    return this.http.post<Customer>(this.URL, customer);
  }

  findById(id: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.URL}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }

  update(id: number, customer: Customer) {
    return this.http.put(`${this.URL}/${id}`, customer);
  }

  findByName(nameSearch: string) {
    return this.http.get(this.URL + '?name_like=' + nameSearch);
  }
}
