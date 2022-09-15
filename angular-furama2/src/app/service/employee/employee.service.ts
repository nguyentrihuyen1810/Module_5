import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../data/customer/Customer';
import {Employee} from '../../data/employee/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URL = ' http://localhost:3000/employee';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL);
  }

  create(employee: Employee) {
    return this.http.post<Employee>(this.API_URL, employee);
  }

  findById(id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.API_URL}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/' + id);
  }

  update(id: number, employee: Employee) {
    return this.http.put(`${this.API_URL}/${id}`, employee);
  }

  findByName(nameSearch: string) {
    return this.http.get(this.API_URL + '?customerName_like=' + nameSearch );
  }
}
