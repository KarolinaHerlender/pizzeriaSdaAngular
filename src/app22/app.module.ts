import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon'
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BasketComponent } from './basket/basket.component';
import { PizzaService } from "./pizza/pizza.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import {MatButtonModule,MatCardModule, MatCheckboxModule, MatListModule,
   MatGridListModule, MatMenuModule} from '@angular/material';
import { AppService } from "./app.service";


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule, MatCardModule, MatCheckboxModule, MatGridListModule,
    MatListModule
  ],
  providers: [PizzaService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
