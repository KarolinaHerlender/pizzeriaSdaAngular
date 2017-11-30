import { Ingredient } from './ingredients.model';
import { Model } from "./model";
import { environment } from "../../../environments/environment";

export class Pizza extends Model {
  public static modelName = 'Pizza';
  private name: string;
  private price: number;

    static get url(): string {
        return environment.api + '/pizzas';
    }

    constructor(id: string, name: string,
      price: number,
      public Ingredients: Array<Ingredient>) {
      super(id);
      this.price = price;
      this.name = name;
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
    set Price(name: number) {
        this.price = name;
    }
}
