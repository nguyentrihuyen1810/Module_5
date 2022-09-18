import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../data/customer/CustomerType';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {Customer} from '../../data/customer/Customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0)9([0|1])[0-9]{7}$')]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });

  customerType: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.getCategory();
  }

  add() {
    const customer: Customer = {
      id: this.customerForm.value.name,
      name: this.customerForm.value.name,
      birthday: this.customerForm.value.birthday,
      gender: this.customerForm.value.gender,
      phone: this.customerForm.value.phone,
      email: this.customerForm.value.email,
      address: this.customerForm.value.address,
      customerType: {
        id: this.customerForm.value.customerType
      }
    };
    this.customerService.create(this.customerForm.value).subscribe((res) => {
      this.router.navigateByUrl('/customer-list');
      this.snackBar.open('Create successfully!', 'ok');
    });
  }

  getCategory() {
    this.customerTypeService.getAllType().subscribe((res) => {
        this.customerType = res;
      });
  }

}



// code: new FormControl('', [Validators.required, Validators.pattern('^KH[0-9]{4}$')]),
//   type: new FormControl('', [Validators.required]),
//   name: new FormControl('', [Validators.required]),
//   birthday: new FormControl('', [Validators.required]),
//   gender: new FormControl('', [Validators.required]),
//   idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]),
//   phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0)9([0|1])[0-9]{7}$')]),
//   email: new FormControl('', [Validators.required, Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')]),
//   address: new FormControl('', [Validators.required])
