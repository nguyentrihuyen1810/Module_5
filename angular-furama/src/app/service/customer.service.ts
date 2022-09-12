import { Injectable } from '@angular/core';
import {CustomerDAO} from "../data/CustomerDao";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  saveProduct(customer) {
    CustomerDAO.customers.push(customer);
  }

  getAll() {
    return CustomerDAO.customers;
  }

  constructor() { }
}
