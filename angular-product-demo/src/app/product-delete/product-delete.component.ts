import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  nameD: any;
  idD: any;

  constructor(public dialogRef: MatDialogRef<ProductDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private productService: ProductService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data.datal);
    this.nameD = this.data.datal.name;
    this.idD = this.data.datal.id;
  }

  delete() {
    this.productService.delete(this.idD).subscribe(
      (data) => {
        console.log('Success');
        this.dialogRef.close();
        this.snackBar.open('Delete Successfully!', 'ok');
      });
  }
}
