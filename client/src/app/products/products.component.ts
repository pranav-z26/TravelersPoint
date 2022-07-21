import { Component, OnInit } from '@angular/core';
import { Product } from '../admin/models/product';
import { ProductsService } from '../admin/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      // console.log("this r products", products);
      this.products = products;
    })
  }
}
