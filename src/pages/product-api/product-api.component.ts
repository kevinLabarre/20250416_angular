import { Component } from '@angular/core';
import { ProductApiService } from '../../services/productApi/product-api.service';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-api',
  imports: [],
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css'
})
export class ProductApiComponent {

  products: IProduct[] = [];

  constructor(private service: ProductApiService) {
    this.service.getProducts().subscribe({
      next: (resp) => {         // next: Fonction qui s'exécutera uniquement si on a un retour OK
        this.products = resp
        console.log(resp)
      },
      error: (e) => { console.error(e.message) },         // Fonction qui s'exécutera uniquement si on a une erreur
      complete: () => { console.log('Requête terminé') }  // Fonction qui s'exécutera toujours, a la fin de la requete
    })
  }
}

