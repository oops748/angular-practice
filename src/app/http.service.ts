import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private url = "http://localhost:8081/demo/products";
  constructor(private http: HttpClient) { }

}
