import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { PrductFormComponent } from "../../components/prduct-form/prduct-form.component";

@Component({
  selector: 'app-product-detail',
  imports: [RouterOutlet, RouterLink, PrductFormComponent],
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

  updateProduct(product: any) {
    console.log("MàJ PARENT !!!")
    this.product = product
    console.log(product, "PRODUCT !")
  }

}
