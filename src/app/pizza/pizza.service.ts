import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pizza } from "./models/pizza.model";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Array<Pizza>> {
    return this.http.get<Array<Pizza>>(Pizza.url);
      // .map((pizzas: Array<Pizza>)  => {
      //   return pizzas as Array<Pizza>;
      // });
  }


}
