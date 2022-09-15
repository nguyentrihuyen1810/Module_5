import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {CustomerTypeService} from '../service/customer-type.service';
import {Route, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Customer} from '../data/Customer';
import {CustomerType} from '../data/CustomerType';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    customerId: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
    customerName: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });

  customerType: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCustomerType();
  }

  add() {
    const customer: Customer = {
      customerId: this.customerForm.value.name,
      customerName: this.customerForm.value.name,
      birthday: this.customerForm.value.birthday,
      gender: this.customerForm.value.gender,
      idCard: this.customerForm.value.idCard,
      phone: this.customerForm.value.phone,
      email: this.customerForm.value.email,
      address: this.customerForm.value.address,
      customerType: {
        id: this.customerForm.value.customerType,
      }
    };
    this.customerService.create(this.customerForm.value).subscribe((res) => {
      this.router.navigateByUrl('');
      this.snackBar.open('Create successfully!', 'OK');
    });
  }

  getCustomerType() {
    this.customerTypeService.getAllType().subscribe((res) => {
      this.customerType = res;
    });
  }
}
