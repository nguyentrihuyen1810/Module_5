import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoHang} from '../data/LoHang';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LohangService {
  URL = 'http://localhost:3000/lohang';

  constructor(private http: HttpClient) {}

  getAllType(): Observable<LoHang[]>  {
    return this.http.get<LoHang[]>(this.URL);
  }

  findByType(nameSearch: string) {
    return this.http.get(this.URL + '?name_like=' + nameSearch );
  }
}
