import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL = " http://localhost:3000/customer";
  regURL = " http://localhost:3000/customerType";

  constructor(private _http: HttpClient) { }

  getAllCustomer() {
    return this._http.get(this.URL);
  }
}
