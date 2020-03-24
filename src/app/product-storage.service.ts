import { Injectable } from '@angular/core';
import {Product} from "./shop/products/product";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() { }

  products: Product[] = [
    { id:1, name: 'Produkt 1', price: 10.00, quantity: 100, available: true},
    { id:2, name: 'Produkt 2', price: 20.00, quantity: 200, available: false},
  ];


  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  removeProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    this.products.splice(productIndex, 1);
  }

  private idCount: number = 3;

  saveProduct(product: Product) {
    /*product.id = this.idCount;
    this.products.push(product);
    this.idCount++;*/
    if (product.id) {
      const productIndex = this.products.findIndex(p => p.id === product.id);
      this.products[productIndex] = product;
    } else {
      product.id = this.idCount;
      this.products.push(product);
      this.idCount++;
    }
  }

  getProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    return {...this.products[productIndex]}
  }
}
