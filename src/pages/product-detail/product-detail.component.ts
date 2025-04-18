import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { PrductFormComponent } from "../../components/prduct-form/prduct-form.component";
import { ProductApiService } from '../../services/productApi/product-api.service';
import { IProduct } from '../../interfaces/IProduct';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-product-detail',
  imports: [RouterOutlet, RouterLink, PrductFormComponent, ProductCardComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  id: number = 0

  product: any;
  // productApi: IProduct | undefined
  productApi?: IProduct

  constructor(private route: ActivatedRoute, private service: ProductService, private serviceApi: ProductApiService) {
    this.id = this.route.snapshot.params['id'];

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'))
      this.product = this.service.getById(String(this.id))
      this.loadProductApi()
    })
  }


  loadProductApi() {
    if (this.id !== 0)
      this.serviceApi.getProductById(String(this.id)).subscribe({
        next: (resp) => {
          this.productApi = resp
          console.log("Product API", this.productApi)
        }
      })
  }


  updateProduct(product: any) {
    console.log("MàJ PARENT !!!")
    this.product = product
    console.log(product, "PRODUCT !")
  }

}
