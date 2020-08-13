import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import { Product } from '../../../models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartDto } from 'src/app/models/cart-item';


// tslint:disable-next-line:component-class-suffix
export interface ProductCartItem {
  idProduct: number;
  producName: string;
  qty: number;
  price: number;

}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalMoney = 0;

  listCartItem: CartDto[] = [];

  constructor(
    private messengerService: MessengerService,
    private cartService: CartService
    ) { }

    ngOnInit(): void {
    // this.addProductToCartOld();
    this.getAllCarts();
    this.addProductToCart();
  }

  // tslint:disable-next-line:typedef
  getAllCarts() { // Sau lấy listCart thì tính tổng luôn
    this.cartService.getAllCartItem().subscribe(listCartDto => {
      this.listCartItem = listCartDto;
      this.calMoney();
    });
  }

  // tslint:disable-next-line:typedef
  addProductToCart() {
    this.messengerService.getMeg().subscribe((product: Product) => {
      this.getAllCarts();
      this.calMoney();
    });
  }

  // tslint:disable-next-line:typedef
  calMoney() {
    // Tinh total
    this.totalMoney = 0;
    // tslint:disable-next-line:no-shadowed-variable
    this.listCartItem.forEach(product => {
      this.totalMoney += product.product.price * product.qty;
    });

  }

  /*
  // tslint:disable-next-line:typedef
  addProductToCartOld() {
    this.messengerService.getMeg().subscribe((product: Product) => { // subscribe: Trả về dữ liệu
      this.addProduct(product);
      this.calMoney();
    });
  }

  // tslint:disable-next-line:typedef
  addProduct(product: Product) {
    // tslint:disable-next-line:prefer-const
    let checkProductExis = false;
    for (const i in this.listCartItem) {
      if (this.listCartItem[i].idProduct === product.id) { // san pham da co trong ListCart
        this.listCartItem[i].qty++;
        checkProductExis = true;
        break;
      }
    }

    if (!checkProductExis) { // product chưa có trong List Cart thì thêm vào listCartItem
      this.listCartItem.push({
        idProduct: product.id,
        producName: product.name,
        price: product.price,
        qty: 1
      });
    }
  } */


}
