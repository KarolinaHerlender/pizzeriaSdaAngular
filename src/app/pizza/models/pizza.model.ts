import { Ingredient } from './ingredients.model';
import { Model } from "./model";
import { environment } from "../../../environments/environment";
export class Pizza extends Model {
  public static modelName = 'Pizza';
  private name: string;
  private price: number;
  Ingredients: Array<Ingredient>;

    static get url(): string {
        return environment.api + '/pizzas';
    }

    constructor(id: string, name: string, price: number, public ingredients: Array<Ingredient>) {
      super(id);
      this.price = price;
      this.name = name;
    }
    get Name(): string {
        return this.name;
    }
    set Name(name: string) {
        this.name = name;
    }
    get Price(): number {
        return this.price;
    }
    set Price(name: number) {
        this.price = name;
    }
}
