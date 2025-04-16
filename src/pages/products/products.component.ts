import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productId: number = 0;

  constructor(private router: Router) { }

  goToProductDetail() {
    // this.router.navigate([`product/${this.productId}`]);
    this.router.navigate(["/product/", this.productId]);
  }

}

