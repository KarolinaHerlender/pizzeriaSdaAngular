import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    {path: '/pizzas', label: 'Menu'},
    {path: '/basket', label: 'Koszyk'}
  ];
}
