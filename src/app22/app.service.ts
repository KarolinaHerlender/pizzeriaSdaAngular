import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable()
export class AppService {

  orderId: number;
constructor() { }

  getDelivery (): number {
    return this.orderId
  }

  setDelivery(order: number) {
    this.orderId = order;
  }



}
