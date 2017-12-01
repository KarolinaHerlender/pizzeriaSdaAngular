import { Ingredient } from './ingredients.model';
import { Model } from "./model";
import { environment } from "../../../environments/environment";
import { Pizza } from "./pizza.model";

export class Order extends Model {
  public static modelName = 'PizzaOrder';
  private name: string;
  private price: number;

    static get url(): string {
        return environment.api + '/pizzaOrder';
    }

    constructor(id: string, public Pizza: Pizza, public Ingredients: Array<Ingredient>) {
      super(id);
      this.name = name;
      this.updatePrice();
    }
    get Name(): string {
        return this.name;
    }
    set Name(name: string) {
        this.name = 'Pizza ' + name;
    }
    get Price(): number {
        return this.price;
    }
    changeIngredient(oldIngredient: Ingredient, ingredient: Ingredient) {
      let foundIndex = this.Pizza.Ingredients.indexOf(oldIngredient);
      this.Pizza.Ingredients[foundIndex] = ingredient;
      this.updatePrice();
    }

    private updatePrice() {
      this.price = this.Pizza.Price + this.Ingredients.map((ingredient: Ingredient)=> ingredient.Price).reduce((a, b) => a + b);
    }
}
