import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/CustomerType';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customerEditForm: FormGroup = new FormGroup({
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
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getType();

    this.customerService.findById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
      this.customerEditForm.setValue(data);
    });
    this.customerTypeService.getAllType().subscribe((data) => {
      this.customerType = data;
    });
  }

  update() {
    this.customerService.update(this.activatedRoute.snapshot.params.id, this.customerEditForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('');
        this.snackBar.open('Update successfully!', 'ok');
      });
  }

  getType() {
    this.customerTypeService.getAllType().subscribe((res) => {
      this.customerType = res;
    });
  }

}
