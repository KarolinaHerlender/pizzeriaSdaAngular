import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Pizza } from "./models/pizza.model";
import { Ingredient } from "./models/ingredients.model";


interface IPizza {
  _id: string;
  ingredients: Array<string>;
  name: string;
  cost: number;
}
interface IIngredient {
  _id: string;
  name: string;
  cost: number;
  can_add: boolean;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class PizzaService {
ingredients: Array<Ingredient>
constructor(private http: HttpClient) { }

  getPizzas (): Observable<Array<Pizza>> {
    return Observable.forkJoin(this.http.get<Pizza[]>(Pizza.url),
      this.http.get<Pizza[]>(Ingredient.url)).map(([pizzas, ingredients]: [any, any])=> {
        console.log('cosa ', pizzas);
        console.log('cosa ', ingredients);
        pizzas = pizzas as Array<Pizza>;
  //      console.log('can map ', pizzas.ingredients)
        let pizzaList: Array<Pizza> = [];
        pizzas.forEach((pizza: IPizza) => {
          let ingredientList = pizza.ingredients
            .map((ingPizza: string) => ingredients.find((ing: IIngredient)=> {
              return ing._id == ingPizza;
          }))
          pizzaList.push(new Pizza(pizza._id, pizza.name, pizza.cost, ingredientList));
          console.log('change pizza ', pizza);
        })
        ingredients = ingredients as Array<Ingredient>
        this.ingredients = ingredients;
        return pizzaList;
      });
  }
  getIngredients(): Array<Ingredient> {
    return this.ingredients;
  }
  getPizza(id: number): Observable<Pizza> {
    const url = Pizza.url + id;
    return this.http.get<Pizza>(url).pipe(
      tap(_ => console.log('Success!'))
    );
  }

}
