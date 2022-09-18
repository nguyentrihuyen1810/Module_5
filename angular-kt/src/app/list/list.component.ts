import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {LohangService} from '../service/lohang.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  p = 1;
  product: any = [];
  nameSearch: string;

  constructor(private productService: ProductService,
              private loHangService: LohangService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      (res) => {
        this.product = res;
      });
  }

}
