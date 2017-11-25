import { Component, OnInit } from '@angular/core';
import { PizzaService } from "./pizza.service";
import { Pizza } from "./models/pizza.model";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas: Array<Pizza>;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.getPizzas()
    .subscribe((newPizzas: Array<Pizza>) => {
      console.log('newPizzas', newPizzas);
    })
  }

}