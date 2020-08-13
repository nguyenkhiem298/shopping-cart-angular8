import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productUrl } from './../config/api';

const url = productUrl + '/users';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  // tslint:disable-next-line:max-line-length
  //   new Product(1, 'Product 1', 'Beautiful Korean Women Fashion Style', 250, 'https://i2.wp.com/moodesto.com/wp-content/uploads/2019/10/Korean-Fashion-Style-Ideas-1.jpg'),
  // ];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(url);
  }


}
