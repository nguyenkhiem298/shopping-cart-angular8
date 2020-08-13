import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.productList = this.productService.getProducts();
    this.productService.getProducts().subscribe( listProduct => {
      this.productList = listProduct;
    });

  }

}
