import { Component, OnInit } from '@angular/core';
import { PizzaService } from "./pizza.service";
import { Pizza } from "./models/pizza.model";
import { Ingredient } from "./models/ingredients.model";
import { OrderComponent } from "../order/order.component";
import { MatDialog } from "@angular/material/dialog";

interface Order {
  pizza: Pizza,
  ingredients: Array<Ingredient>
}

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas: Array<Pizza>;
  basket: Array<Pizza>;
  orders: Array<Order>;
  ingredients: Array<Ingredient>;
  constructor(public dialog: MatDialog,
    private pizzaService: PizzaService) { }

  ngOnInit() {
    this.basket = new Array();
    this.orders = [];
    this.pizzaService.getPizzas()
    .subscribe(([newPizzas, newIngredients]: [Array<Pizza>, Array<Ingredient>]) => {
      console.log('newPizzas', newPizzas);
      this.pizzas = newPizzas;
      this.ingredients = newIngredients;
    }, (error: any) => console.log('Mamy errory!', error));
  }

  addToBasket(pizza: Pizza) {
    let order: Order = {
        pizza: pizza,
        ingredients: this.ingredients
          .filter((ingredient: Ingredient) => ingredient.canAdd)
    };
    let dialogRef = this.dialog.open(OrderComponent, {
      data: order
    });
    dialogRef.afterClosed().subscribe((result: Order) => {
      console.log('After closer: ', result);
      this.orders.push(result);
      console.log('After closer: ', this.orders);
    });
  }
}
