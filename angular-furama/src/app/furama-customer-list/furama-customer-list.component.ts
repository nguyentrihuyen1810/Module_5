import { Component, OnInit } from '@angular/core';
import {IFuramaCustomer} from "../model/IFuramaCustomer";
import {CustomerDAO} from "../data/CustomerDao";

@Component({
  selector: 'app-furama-customer-list',
  templateUrl: './furama-customer-list.component.html',
  styleUrls: ['./furama-customer-list.component.css']
})
export class FuramaCustomerListComponent implements OnInit {

  constructor() { }

  config: any;
  customers: IFuramaCustomer[] = CustomerDAO.getAllCustomers();
  p: number = 1;

  ngOnInit(): void {
  }

}
