import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private baseUrl = 'http://localhost:8081/demo/products';
  constructor(private http: HttpClient) { }

  // 接後端api
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

  getOneProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<any>(`${this.baseUrl}`, product);
  }

  updateProduct(id: string, product: Product): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
