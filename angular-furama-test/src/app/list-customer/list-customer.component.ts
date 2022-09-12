import { Component, OnInit } from '@angular/core';

export interface Customer {
  customerType?: string,
  name?: string,
  birthday?: string,
  gender?: string,
  idCard?: string,
  phone?: string,
  email?: string,
  address?: string
}

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: Customer [] = [
    {
      customerType: "Gold",
      name: "Mai Van A",
      birthday: "12/05/1995",
      gender: "Nam",
      idCard: "123456789",
      phone: "0935164789",
      email: "vanq@gmail.com",
      address: "Da Nang"
    },
    {
      customerType: "Diamond",
      name: "Nguyen Thi B",
      birthday: "26/02/1993",
      gender: "Nu",
      idCard: "123654789",
      phone: "031459763",
      email: "thib@gmail.com",
      address: "Quang Nam"
    },
    {
      customerType: "Gold",
      name: "Tran C",
      birthday: "03/12/1990",
      gender: "Nam",
      idCard: "569784123",
      phone: "035974681",
      email: "tranc@gmail.com",
      address: "Gia Lai"
    },
    {
      customerType: "Sliver",
      name: "Le D",
      birthday: "05/05/2000",
      gender: "Nam",
      idCard: "159786432",
      phone: "069785423",
      email: "led@gmail.com",
      address: "Da Nang"
    },
    {
      customerType: "Diamond",
      name: "Hoang Van E",
      birthday: "06/12/1999",
      gender: "Nam",
      idCard: "234569712",
      phone: "0935147893",
      email: "hoangvane@gmail.com",
      address: "Ho Chi Minh"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
