import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../data/Category';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Product} from '../../data/Product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    nnh: new FormControl('', [Validators.required]),
    nsx: new FormControl('', [Validators.required]),
    nhh: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  categories: Category[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.getCategory();
  }

  add() {
    const product: Product = {
      id: this.productForm.value.name,
      quantity: this.productForm.value.quantity,
      nnh: this.productForm.value.nnh,
      nsx: this.productForm.value.nsx,
      nhh: this.productForm.value.nhh,
      category: {
        id: this.productForm.value.category,
        // name: this.productForm.value.category,
        // price: this.productForm.value.category,
        // dv: this.productForm.value.category,
      }
    };
    this.productService.create(this.productForm.value).subscribe((res) => {
      this.router.navigateByUrl('');
      this.snackBar.open('Create successfully!', 'OK');
    });
  }

  getCategory() {
    this.categoryService.getAllType().subscribe((res) => {
        this.categories = res;
      }
    );
  }

}


