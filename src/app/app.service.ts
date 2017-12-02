import { Injectable } from '@angular/core';
import { Pizza } from "./pizza/models/pizza.model";
import { Ingredient } from "./pizza/models/ingredients.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { Observable } from "rxjs/Rx";

export interface Order {
  pizza: Pizza;
  ingredients: Array<Ingredient>
}
export const orderUrl = environment.api + '/pizzaOrders';

export interface ApiOrder {
  pizza: string;
  ingredients: Array<string>;
}

@Injectable()
export class AppService {
  orders: Array<Order>
  constructor(private http: HttpClient) {
    this.orders = [];
   }

  getOrders(): Array<Order> {
    return this.orders;
  }
  addNewOrder(order: Order) {
    this.orders.push(order);
  }
  removeOrder(order: Order) {
    this.orders.splice(this.orders.indexOf(order));
  }

  sendOrder(): Observable<any> {
    let order: Order = this.orders[0];
    let apiOrder: ApiOrder = {
      pizza: order.pizza.Id,
      ingredients: order.ingredients
        .map((ingredient: Ingredient) => ingredient.Id)
    }
    return this.http.post(orderUrl, apiOrder);
  }
}
