import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {CustomerTypeService} from '../service/customer-type.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  p = 1;
  customers: any = [];
  customerNameSearch: string;


  constructor(private customerService: CustomerService,
              private customerType: CustomerTypeService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(
      (res) => {
        this.customers = res;
      });
  }

  openDialogDelete(id: number) {
    this.customerService.findById(id).subscribe(
      (data) => {
        const dialogRef = this.dialog.open(DeleteCustomerComponent, {
          width: '700px',
          data: {datal : data}
        });
        dialogRef.afterClosed().subscribe(res => {
          this.ngOnInit();
        });
      });
  }

  searchByName() {
    this.customerService.findByName(this.customerNameSearch).subscribe((data) => {
      this.customers = data;
    });
  }

  // searchByType() {
  //   this.customerType.findByType(this.nameSearch).subscribe((data) => {
  //     this.customers = data;
  //   });
  // }
}
