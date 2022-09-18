import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/CustomerType';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  customerAddForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0)9[0-9]{8}$')]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });

  customerType: CustomerType[] = [];
  id: number;
  genders: Array<string> = ['Nam', 'Nu', 'Khac'];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCustomerType();
  }

  add() {
    const customer: Customer = {
      id: this.customerAddForm.value.name,
      name: this.customerAddForm.value.name,
      birthday: this.customerAddForm.value.birthday,
      gender: this.customerAddForm.value.gender,
      phone: this.customerAddForm.value.phone,
      email: this.customerAddForm.value.email,
      address: this.customerAddForm.value.address,
      customerType: {
        id: this.customerAddForm.value.customerType
      }
    };
    this.customerService.create(this.customerAddForm.value).subscribe((res) => {
      this.router.navigateByUrl('');
      this.snackBar.open('Create succcessfully!', 'OK');
    });
  }

  getCustomerType() {
    this.customerTypeService.getAllType().subscribe((res) => {
      this.customerType = res;
    });
  }

}
