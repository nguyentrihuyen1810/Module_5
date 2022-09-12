import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer/customer";

const Customers: Customer[] = [
  {
    customerType: "a",
    name: "a",
    birthday: "1234",
    gender: "a",
    idCard: "12345",
    phone: "12345",
    email: "abc",
    address: "abcds"
  }
]

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers = new Customer();
  Customers = Customers;

  constructor() {
  }

  ngOnInit(): void {
  }

}
