import { Component, OnInit } from '@angular/core';
import { Drink } from './drink'
@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {

  drinks: Drink[] = [
   {
    "name": "Coca Cola",
    "type": "Gaseosa",
    "price": 350,
    "taste": "Coca",
    "stock": 5,
    "image": "assets/img/cocacola.jpg",
    clearance: false,
    quantity: 0,
  },
  {
    "name": "Levite",
    "type": "Agua saborizada",
    "price": 225,
    "taste": "Manzana",
    "stock": 7,
    "image": "assets/img/cocacola.jpg",
    clearance: true,
    quantity: 0,
  },
  {
    "name": "Baggio",
    "type": "Jugo",
    "price": 210,
    "taste": "Multifruta",
    "stock": 0,
    "image": "assets/img/cocacola.jpg",
    clearance: false,
    quantity: 0,
  },
];

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(drink: Drink): void {
    if(drink.quantity < drink.stock)
    drink.quantity++;
  }


  downQuantity(drink: Drink): void {
    if(drink.quantity > 0)
    drink.quantity--;
  }
  changeQuantity(event:any, drink: Drink): void {
 console.log(event.key)
  }
}
