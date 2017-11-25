import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private appService: AppService) {
    console.log('get service', this.appService.getDelivery());
   }

  ngOnInit() {
  }

}
