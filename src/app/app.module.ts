import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BasketComponent } from './basket/basket.component';
import { AppRoutingModule } from "./app-routing.module";
import {MatCardModule, MatListModule} from '@angular/material';
import { PizzaService } from "./pizza/pizza.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    PizzaComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
