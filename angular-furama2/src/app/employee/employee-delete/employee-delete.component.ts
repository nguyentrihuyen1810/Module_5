import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../../service/customer/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EmployeeService} from '../../service/employee/employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  nameD: any;
  idD: any;

  constructor(public dialogRef: MatDialogRef<EmployeeDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private employeeService: EmployeeService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data.datal);
    this.nameD = this.data.datal.name;
    this.idD = this.data.datal.id;
  }

  delete() {
    this.employeeService.delete(this.idD).subscribe(
      (data) => {
        console.log('Success');
        this.dialogRef.close();
        this.snackBar.open('Delete Successfully!', 'OK');
      });
  }

}
