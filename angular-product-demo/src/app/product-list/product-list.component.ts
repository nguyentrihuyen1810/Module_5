import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ProductService} from '../../service/product.service';
import {MatDialog} from '@angular/material/dialog';
import {ProductDeleteComponent} from '../product-delete/product-delete.component';
// import {ProductDeleteComponent} from '../product-delete/product-delete.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  p = 1;
  products: any = [];
  nameSearch: string;


  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      (res) => {
        this.products = res;
      });
  }

  openDialogDelete(id: number) {
    this.productService.findById(id).subscribe(
      (data) => {
        const dialogRef = this.dialog.open(ProductDeleteComponent, {
          width: '700px',
          data: {datal : data}
        });
        dialogRef.afterClosed().subscribe(res => {
          this.ngOnInit();
        });
      });
  }

  searchByName() {
    this.categoryService.findByName(this.nameSearch).subscribe((data) => {
      this.products = data;
    });
  }

}
