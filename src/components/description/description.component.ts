import { Component } from '@angular/core';
import { ProductApiService } from '../../services/productApi/product-api.service';
import { IProduct } from '../../interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-description',
  imports: [ReactiveFormsModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {

  // On n'a pas de lien entre le composant 'productDetail' et ce composant , on choisit donc de recharger une nouvelle les données

  // --> Hors programme: Dans ce genre de cas, on peut utiliser un "service partagé"

  id: number
  productApi?: IProduct
  updateProductForm: FormGroup = new FormGroup({
    description: new FormControl(''),
  });

  constructor(private serviceApi: ProductApiService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

    this.route.parent?.paramMap.subscribe(params => {
      console.log("params", params)
      if (params.get('id') !== null) {
        this.id = Number(params.get('id'))
        this.loadProductApi()
      }
    })
  }

  loadProductApi() {
    if (this.id !== 0) {
      this.serviceApi.getProductById(String(this.id)).subscribe({
        next: (resp) => {
          this.productApi = resp
          console.log("description", this.productApi.description)
          this.updateProductForm.setValue({
            description: this.productApi.description
          })
        }
      })
    }
  }

  onSubmit() {
    if (this.updateProductForm.valid) {
      // Spread operator pour injecter l'objet productApi et ses attributs
      const newProduct: IProduct = { ...this.productApi, description: this.updateProductForm.get('description')?.value }

      this.serviceApi.updateProduct(newProduct).subscribe({
        next: (resp) => {
          console.log("UPDATE OK", resp)
          this.productApi = resp
          this.updateProductForm.setValue({
            description: this.productApi.description
          })
        }
      })
    }
  }

}
