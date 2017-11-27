import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Pizza } from "./models/pizza.model";
import { HttpClient } from "@angular/common/http";
import { Ingredient } from "./models/ingredients.model";

interface IPizza {
  name: string,
  cost: number,
  _id: string,
  ingredients: Array<string>
}

interface IIngredient {
  _id: string,
  cost: number,
  can_add: boolean,
  name: string
}


@Injectable()
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<[Array<Pizza>, Array<Ingredient>]> {
    return Observable.forkJoin(
      this.http.get<Array<Pizza>>(Pizza.url),
      this.http.get<Array<Ingredient>>(Ingredient.url))
      .map(([pizzasList, ingredientsList]: [any, any])=> {
        let ingredientObjects: Array<Ingredient> = [];
        //create Ingredients Array:
        ingredientsList.forEach((iingredient: IIngredient) => {
        //  console.log('from backend ingredient: ', iingredient);
          ingredientObjects.push(new Ingredient(iingredient._id, iingredient.name,
                                iingredient.can_add, iingredient.cost));
        })
        console.log('ingredientsObjects ', ingredientObjects);
        //prepare ingredients to pizza
        console.log('pizzas from backend: ', pizzasList);
        let pizzaObjects: Array<Pizza> = [];
        pizzasList.forEach((iPizza: IPizza) => {
          console.log('foreach((iPizza:IPizza)', iPizza);
          let pizzaIngredients: Array<Ingredient> = [];
          pizzaIngredients = iPizza.ingredients
            .map((ingredientId: string) => {
              console.log('ingredient from Pizza ', ingredientId);
              return ingredientObjects
                .find((ingredient: Ingredient) => {
                  console.log('Next ingredient', ingredient, ingredient.Id);
                  return ingredient.Id === ingredientId; });
          });
          pizzaObjects.push(new Pizza(iPizza._id, iPizza.name,
            iPizza.cost, pizzaIngredients));
          console.log('pizzaIngredients ', pizzaIngredients);
        });
          // create pizza
        console.log('pizzaObjects ', pizzaObjects);

        let pizzaWithIngredients: [Array<Pizza>, Array<Ingredient>];
        pizzaWithIngredients = [pizzaObjects,
                                ingredientObjects];
        return pizzaWithIngredients;
      });
      // .map((pizzas: Array<Pizza>)  => {
      //   return pizzas as Array<Pizza>;
      // });
  }


}
