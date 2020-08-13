import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { MessengerService } from '../../../../services/messenger.service';
import { CartService } from '../../../../services/cart.service';
import { CartItem, CartDto } from 'src/app/models/cart-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()productItem: Product;

  cartDto: CartDto;
  checkWish = false;

  constructor(private messengerService: MessengerService,
              private cartService: CartService) { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  handAddProductToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      // console.log(this.productItem);

      this.messengerService.senMeg(this.productItem);
    });
  }

  // tslint:disable-next-line:typedef
  handAddWishList() {
    console.log('handAddWishList');
    this.checkWish = !this.checkWish;
  }

  // tslint:disable-next-line:typedef
  handRemoveWishList() {
    console.log('handRemoveWishList');
    this.checkWish = !this.checkWish;
  }

}
