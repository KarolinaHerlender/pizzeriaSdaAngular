import { Model } from './model';
import { environment } from "../../../environments/environment";
export class Ingredient extends Model {
  private name: string;
  private price: number;

  constructor(id: string, name: string) {
    super(id);
    this.name = name;
  }
        static get url(): string {
        return environment.api + '/tasks';
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
