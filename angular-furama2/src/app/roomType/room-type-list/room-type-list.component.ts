import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../../customer/customer-delete/customer-delete.component';
import {ServiceService} from '../../service/room-type/service.service';
import {ServiceTypeService} from '../../service/room-type/service-type.service';

@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.css']
})
export class RoomTypeListComponent implements OnInit {

  p = 1;
  services: any = [];
  nameSearch: string;

  constructor(private serviceService: ServiceService,
              private serviceTypeService: ServiceTypeService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.serviceService.getAll().subscribe(
      (res) => {
        this.services = res;
      });
  }

  openDialogDelete(id: number) {
    this.serviceService.findById(id).subscribe(
      (data) => {
        const dialogRef = this.dialog.open(CustomerDeleteComponent, {
          width: '700px',
          data: {datal : data}
        });
        dialogRef.afterClosed().subscribe(res => {
          this.ngOnInit();
        });
      });
  }

  searchByName() {
    this.serviceService.findByName(this.nameSearch).subscribe((data) => {
      this.services = data;
    });
  }

}
