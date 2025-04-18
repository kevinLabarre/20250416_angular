import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../services/productApi/product-api.service';
import { IProduct } from '../../interfaces/IProduct';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { IProductPaginate } from '../../interfaces/IProductPaginate';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-product-api',
  imports: [ProductCardComponent],
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css'
})
export class ProductApiComponent implements OnInit {

  products: IProduct[] = [];
  respApi: IProductPaginate = {
    data: [],
    first: 0,
    prev: 0,
    next: 0,
    last: 0,
    pages: 0,
    items: 0
  }

  perPage: number = 10

  constructor(private service: ProductApiService, private viewportScroller: ViewportScroller) {
    // this.service.getProducts().subscribe({
    //   next: (resp) => {         // next: Fonction qui s'exécutera uniquement si on a un retour OK
    //     this.products = resp
    //     console.log(resp)
    //   },
    //   error: (e) => { console.error(e.message) },         // Fonction qui s'exécutera uniquement si on a une erreur
    //   complete: () => { console.log('Requête terminé') }  // Fonction qui s'exécutera toujours, a la fin de la requete
    // })
  }
  ngOnInit(): void {
    this.loadData(1, this.perPage)
  }

  loadData(page: number, perPage: number) {
    this.service.getPaginatedProducts(page, perPage).subscribe({
      next: (resp) => {         // next: Fonction qui s'exécutera uniquement si on a un retour OK
        this.respApi = resp
      },
      error: (e) => { console.error(e.message) },         // Fonction qui s'exécutera uniquement si on a une erreur
      complete: () => { console.log('Requête terminé') }  // Fonction qui s'exécutera toujours, a la fin de la requete
    })
  }

  handleNextPage() {
    if (this.respApi.next !== null)
      this.loadData(this.respApi.next, this.perPage)
    this.scrollToTop()
  }

  handlePreviousPage() {
    if (this.respApi.prev !== null)
      this.loadData(this.respApi.prev, this.perPage)
    this.scrollToTop()
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
