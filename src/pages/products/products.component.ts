import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { title } from 'node:process';

@Component({
  selector: 'app-products',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productId: number = 0;

  products: any[] = []

  productForm: FormGroup;


  constructor(private router: Router, private service: ProductService) {
    this.products = this.service.getProducts();

    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      image: new FormControl(''),
      description: new FormControl('', Validators.required),
      slug: new FormControl('', Validators.required),
      category: new FormControl(''),
    });
  }

  goToProductDetail() {
    // this.router.navigate([`product/${this.productId}`]);
    this.router.navigate(["/product/", this.productId]);
  }


  delete(id: string) {
    this.products = this.service.delete(id);
  }

  handleSearch(e: Event) {
    const target = e.target as HTMLInputElement;
    this.products = this.service.search(target.value)
  }

  handleAddProduct() {
    this.service.add(this.productForm.value);
    this.productForm.reset();
  }

}
