import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeService} from '../../service/employee/employee.service';
import {PositionService} from '../../service/employee/position.service';
import {CustomerDeleteComponent} from '../../customer/customer-delete/customer-delete.component';
import {EmployeeDeleteComponent} from '../employee-delete/employee-delete.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  p = 1;
  employees: any = [];
  nameSearch: string;

  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(
      (res) => {
        this.employees = res;
      });
  }

  openDialogDelete(id: number) {
    this.employeeService.findById(id).subscribe(
      (data) => {
        const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
          width: '700px',
          data: {datal : data}
        });
        dialogRef.afterClosed().subscribe(res => {
          this.ngOnInit();
        });
      });
  }

}
