import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./shop/products/product";
import {User} from "./users/user";

const BASE_URL = "http://localhost:8080/api";
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${BASE_URL}/products`)
  }

  removeProduct(id: number) {
     return this.httpClient.delete(`${BASE_URL}/products/remove/${id}`)
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${BASE_URL}/products/single/${id}`);
  }

  saveProduct(product: Product) {
    return this.httpClient.post(`${BASE_URL}/products/save`, JSON.stringify(product), HTTP_OPTIONS)
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${BASE_URL}/users`)
  }

  removeUser(userId: number) {
    return this.httpClient.delete(`${BASE_URL}/users/remove/${userId}`)
  }

  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${BASE_URL}/users/single/${userId}`)
}

  saveUser(user: User) {
    return this.httpClient.post(`${BASE_URL}/users/save`, JSON.stringify(user), HTTP_OPTIONS)
  }

}
