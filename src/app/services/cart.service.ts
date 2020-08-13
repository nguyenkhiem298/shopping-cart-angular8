import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem, CartDto } from '../models/cart-item';
import { Product } from '../models/product';

const getCartItemUrl = cartUrl + '/carts';
const postCartItemUrl = cartUrl + '/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  /*
    // tslint:disable-next-line:typedef
    getAllCartItem(): Observable<CartItem[]> {
      return this.http.get<CartItem[]>(getCartItem);
    }

    // tslint:disable-next-line:typedef
    addProductToCart(cartDto: CartDto): Observable<any>{
      return this.http.post<any>(postCartItem, cartDto);
    }
    */

  // tslint:disable-next-line:typedef
  getAllCartItem(): Observable<CartDto[]> {
    return this.http.get<CartDto[]>(getCartItemUrl);
  }

  // tslint:disable-next-line:typedef
  addProductToCart(product: Product): Observable<any> {
    return this.http.post(postCartItemUrl, {product});
  }

}
