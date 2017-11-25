import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PizzaComponent } from "./pizza/pizza.component";
import { BasketComponent } from "./basket/basket.component";

const appRoutes: Routes = [
  {path: 'pizzas', component: PizzaComponent},
  {path: 'basket', component: BasketComponent},
  {path: '', redirectTo: 'pizzas', pathMatch:'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
