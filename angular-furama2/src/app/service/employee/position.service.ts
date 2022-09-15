import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../../data/customer/CustomerType';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  URL = 'http://localhost:3000/position';

  constructor(private http: HttpClient) {
  }

  getAllType(): Observable<Position[]> {
    return this.http.get<Position[]>(this.URL);
  }
}
