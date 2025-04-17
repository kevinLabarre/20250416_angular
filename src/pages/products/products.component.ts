import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { title } from 'node:process';
import { PrductFormComponent } from "../../components/prduct-form/prduct-form.component";

@Component({
  selector: 'app-products',
  imports: [FormsModule, ReactiveFormsModule, PrductFormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productId: number = 0;

  products: any[] = []


  constructor(private router: Router, private service: ProductService) {
    this.products = this.service.getProducts();
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
}
