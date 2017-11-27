import { Component, OnInit } from '@angular/core';
import { PizzaService } from "./pizza.service";
import { Pizza } from "./models/pizza.model";
import { Ingredient } from "./models/ingredients.model";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas: Array<Pizza>;
  basket: Array<Pizza>;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.basket = new Array();
    this.pizzaService.getPizzas()
    .subscribe(([newPizzas, newIngredients]: [Array<Pizza>, Array<Ingredient>]) => {
      console.log('newPizzas', newPizzas);
      this.pizzas = newPizzas;
    }, (error: any) => console.log('Mamy errory!', error));
  }

  addToBasket(pizza: Pizza) {
    this.basket.push(pizza);
  }
}
