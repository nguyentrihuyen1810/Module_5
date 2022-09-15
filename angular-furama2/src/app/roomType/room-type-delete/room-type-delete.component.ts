import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../service/employee/employee.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ServiceService} from '../../service/room-type/service.service';

@Component({
  selector: 'app-room-type-delete',
  templateUrl: './room-type-delete.component.html',
  styleUrls: ['./room-type-delete.component.css']
})
export class RoomTypeDeleteComponent implements OnInit {

  nameD: any;
  idD: any;

  constructor(public dialogRef: MatDialogRef<RoomTypeDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private serviceService: ServiceService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data.datal);
    this.nameD = this.data.datal.name;
    this.idD = this.data.datal.id;
  }

  delete() {
    this.serviceService.delete(this.idD).subscribe(
      (data) => {
        console.log('Success');
        this.dialogRef.close();
        this.snackBar.open('Delete Successfully!', 'OK');
      });
  }

}
