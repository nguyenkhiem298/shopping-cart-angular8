import { Product } from './product';

export class CartItem {
  id: number;
  producName: string;
  qty: number;
  price: number;

  constructor(id: number, qty = 1 , product: Product) {
    this.id = id;
    this.producName = product.name;
    this.qty = qty;
    this.price = product.price;
  }

}


// tslint:disable-next-line:class-name
export class CartDto {
  qty: number;
  product: Product;

  constructor(qty: number = 1, product: Product) {
    this.qty = qty;
    this.product = product;
  }

}
