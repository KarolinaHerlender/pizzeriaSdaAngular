import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Pizza } from "../pizza/models/pizza.model";
import { Ingredient } from "../pizza/models/ingredients.model";
import { MatSelectionList } from "@angular/material/list";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderPizza: Pizza;
  ingredients: Array<Ingredient>;
  selectedIngredients: Array<Ingredient>;
  constructor(
    public dialogRef: MatDialogRef<OrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {pizza: Pizza, ingredients: Array<Ingredient>}) { }

  ngOnInit() {
    this.selectedIngredients = [];
    this.orderPizza = this.data.pizza;
    this.ingredients = this.data.ingredients;
    console.log('order pizza ', this.orderPizza);
  }

  changeOrder(ingredient: Ingredient) {
    let index = this.selectedIngredients.indexOf(ingredient);
    if(index === -1) {
      this.selectedIngredients.push(ingredient);
    } else {
      this.selectedIngredients.splice(index);
    }
  }

  confirm() {
    console.log('this selected ', this.selectedIngredients);
    this.dialogRef.close({pizza: this.orderPizza,
      ingredients: this.selectedIngredients});
  }
  closeDialog() {
    this.dialogRef.close(false);
  }
}
