import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizzaComponent } from "./pizza/pizza.component";
import { BasketComponent } from "./basket/basket.component";
const routes: Routes = [
  { path: 'basket', component: BasketComponent },
  { path: '', redirectTo: '/pizzas', pathMatch: 'full'  },
  //{ path: 'detail/:id', component: PizzaDetailComponent },
  { path: 'pizzas', component: PizzaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

