import { Component, OnInit } from '@angular/core';
import { PizzaService } from "./pizza.service";
import { Pizza } from "./models/pizza.model";
import { AppService } from "../app.service";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas: Array<Pizza>;
  constructor(private pizzaService: PizzaService, private appService: AppService) { }

  ngOnInit() {
    this.appService.setDelivery(100023);
    this.pizzaService.getPizzas().subscribe(anything => {
      this.pizzas = anything;
      console.log(anything);
  //    console.log('GOTTA',this.pizzaService.getIngredients())
    });
  }
  addPizza(event: any) {
    console.log('pizza added', event);
    console.log('pizza added2', event.target);
  }
}
