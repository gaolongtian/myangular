import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/api/products').map(res => res.json());
  }
}

export class Product {

  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
