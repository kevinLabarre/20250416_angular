import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  id: number = 0

  product;

  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.id = this.route.snapshot.params['id'];

    this.product = this.service.getById(String(this.id))
  }

}
