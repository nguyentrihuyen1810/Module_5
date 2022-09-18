// import { Component, OnInit } from '@angular/core';
// import {Product} from '../../data/Product';
// import {ProductService} from '../../service/product.service';
// import {CategoryService} from '../../service/category.service';
// import {ActivatedRoute, Router} from '@angular/router';
// import {MatSnackBar} from '@angular/material/snack-bar';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
//
// @Component({
//   selector: 'app-product-edit',
//   templateUrl: './product-edit.component.html',
//   styleUrls: ['./product-edit.component.css']
// })
// export class ProductEditComponent implements OnInit {
//   categories: any = [];
//   products: Product[];
//
//   constructor(private productService: ProductService,
//               private categoryService: CategoryService,
//               private activatedRoute: ActivatedRoute,
//               private router: Router,
//               private snackBar: MatSnackBar) { }
//
//   productForm = new FormGroup({
//     id: new FormControl(''),
//     name: new FormControl('', [Validators.required]),
//     price: new FormControl('', [Validators.required]),
//     status: new FormControl('', [Validators.required]),
//     quantity: new FormControl('', [Validators.required]),
//     category: new FormControl('', [Validators.required])
//   });
//
//
//   ngOnInit(): void {
//     this.getType();
//
//     this.productService.findById(this.activatedRoute.snapshot.params.id).subscribe((data) => {
//       this.productForm.setValue(data);
//     });
//     this.categoryService.getAllType().subscribe((data) => {
//       this.categories = data;
//     });
//   }
//
//   update() {
//     this.productService.update(this.activatedRoute.snapshot.params.id, this.productForm.value).subscribe(
//       (data) => {
//         this.router.navigateByUrl('');
//         this.snackBar.open('Update successfully!', 'ok');
//       });
//   }
//
//   getType() {
//     this.categoryService.getAllType().subscribe((res) => {
//       this.categories = res;
//     });
//   }
//
// }
