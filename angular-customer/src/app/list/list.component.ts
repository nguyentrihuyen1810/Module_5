import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteComponent} from '../delete/delete.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  p = 1;
  customers: any = [];
  nameSearch: string;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(
      (res) => {
        this.customers = res;
      });
  }

  openDialogDelete(customerId: number) {
    this.customerService.findById(customerId).subscribe(
      (data) => {
        const dialogRef = this.dialog.open(DeleteComponent, {
          width: '700px',
          data: {datal : data}
        });
        dialogRef.afterClosed().subscribe(res => {
          this.ngOnInit();
        });
      });
  }

  searchByName() {
    this.customerService.findByName(this.nameSearch).subscribe((data) => {
      this.customers = data;
    });
  }

}
