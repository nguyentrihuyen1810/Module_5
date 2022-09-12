import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-furama-customer-create',
  templateUrl: './furama-customer-create.component.html',
  styleUrls: ['./furama-customer-create.component.css']
})
export class FuramaCustomerCreateComponent implements OnInit {
  formCustomerCreate: FormGroup;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.formCustomerCreate = new FormGroup({
      customerId: new FormControl('',[Validators.required, Validators.pattern('^\\d+$')]),
      customerBirthday: new FormControl('', [Validators.required]),
      customerGender: new FormControl('', [Validators.required]),
      customerAddress: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('/([\\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\\b/')]),
      customerIdentify: new FormControl('', [Validators.required, Validators.pattern('/^[0-9]{10,12}$/')]),
      customerEmail: new FormControl('', [Validators.required, Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]),
    });
  }

  submit() {
    const customer = this.formCustomerCreate.value;
    this.customerService.saveProduct(customer);
    this.formCustomerCreate.reset();
  }
}
