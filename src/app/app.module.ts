import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BasketComponent } from './basket/basket.component';
import { AppRoutingModule } from "./app-routing.module";
import {MatCardModule,MatButtonModule,MatDialogModule, MatListModule} from '@angular/material';
import { PizzaService } from "./pizza/pizza.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "./pizza/filter";
import { OrderComponent } from './order/order.component';
import { AppService } from "./app.service";
import { NewFilterPipe } from './new-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    PizzaComponent,
    FilterPipe,
    OrderComponent,
    NewFilterPipe,
  ],
  entryComponents: [
    OrderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [AppService, PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
