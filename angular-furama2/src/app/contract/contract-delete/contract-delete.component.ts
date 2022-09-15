import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../../service/customer/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contract-delete',
  templateUrl: './contract-delete.component.html',
  styleUrls: ['./contract-delete.component.css']
})
export class ContractDeleteComponent implements OnInit {
  nameD: any;
  idD: any;

  constructor(public dialogRef: MatDialogRef<ContractDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private customerService: CustomerService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data.datal);
    this.nameD = this.data.datal.name;
    this.idD = this.data.datal.id;
  }

  delete() {
    this.customerService.delete(this.idD).subscribe(
      (data) => {
        console.log('Success');
        this.dialogRef.close();
        this.snackBar.open('Delete Successfully!', 'OK');
      });
  }

}
