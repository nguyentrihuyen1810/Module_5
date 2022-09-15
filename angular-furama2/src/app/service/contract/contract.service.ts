import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../data/customer/Customer';
import {Contract} from '../../data/contract/Contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  API_URL = ' http://localhost:3000/contract';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.API_URL);
  }

  createContract(contract: Contract) {
    return this.http.post<Contract>(this.API_URL, contract);
  }

  findById(id: number): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.API_URL}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/' + id);
  }

  updateContract(id: number, contract: Contract) {
    return this.http.put(`${this.API_URL}/${id}`, contract);
  }

  findByName(nameSearch: string) {
    return this.http.get(this.API_URL + '?name_like=' + nameSearch );
  }
}
