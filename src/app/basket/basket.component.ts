import { Component, OnInit } from '@angular/core';
import { AppService, Order } from "../app.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  orders: Array<Order>;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.orders = this.appService.getOrders();
    console.log('zamówienia ', this.orders);
  }
  removePizza(order: Order) {
    this.appService.removeOrder(order);
  }
  confirm() {
    this.appService.sendOrder()
      .subscribe(apiOrder => console.log('From backend ', apiOrder));
  }
}
