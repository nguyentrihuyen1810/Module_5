import { Component, OnInit } from '@angular/core';
import {Customer} from '../../data/customer/Customer';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerType: any = [];
  customers: Customer[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) { }

  customerForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });


  ngOnInit(): void {
    this.getType();

    this.customerService.findById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.customerForm.setValue(data);
    });
    this.customerTypeService.getAllType().subscribe((data) => {
      this.customerType = data;
    });
  }

  update() {
    this.customerService.update(this.activatedRoute.snapshot.params.id, this.customerForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('/customer-list');
        this.snackBar.open('Update successfully!', 'ok');
      });
  }

  getType() {
    this.customerTypeService.getAllType().subscribe((res) => {
      this.customerType = res;
    });
  }

}
