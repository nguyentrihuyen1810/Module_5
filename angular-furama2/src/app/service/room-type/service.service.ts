import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../../data/contract/Contract';
import {Service} from '../../data/contract/Service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URL = ' http://localhost:3000/service';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(this.API_URL);
  }

  create(service: Service) {
    return this.http.post<Service>(this.API_URL, service);
  }

  findById(id: number): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.API_URL}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/' + id);
  }

  update(id: number, service: Service) {
    return this.http.put(`${this.API_URL}/${id}`, service);
  }

  findByName(nameSearch: string) {
    return this.http.get(this.API_URL + '?name_like=' + nameSearch );
  }
}
