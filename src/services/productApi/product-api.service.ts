import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/IProduct';
import { IProductPaginate } from '../../interfaces/IProductPaginate';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:3001/dw_store'


  // pour le getById : http://localhost:3001/dw_store/id
  // Pour màj : http://localhost:3001/dw_store/id   (attention, il faut une requête PUT)
  // Pour pagination : http://localhost:3001/dw_store?_page=1&_per_page=20  (première page est la page 1)

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl)
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${id}`)
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.baseUrl}/${product.id}`, product)
  }

  getPaginatedProducts(page: number, limit: number): Observable<IProductPaginate> {
    return this.http.get<IProductPaginate>(`${this.baseUrl}?_page=${page}&_per_page=${limit}`)
  }

}
