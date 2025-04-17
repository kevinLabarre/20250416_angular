import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:3001/dw_store'

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl)
  }

}
