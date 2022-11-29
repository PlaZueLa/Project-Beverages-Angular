import { Component, OnInit } from '@angular/core';
import { BeverageCartService } from '../beverage-cart.service';
import { Beverage } from './beverage'
@Component({
  selector: 'app-beverages-list',
  templateUrl: './beverages-list.component.html',
  styleUrls: ['./beverages-list.component.scss']
})
export class BeveragesListComponent implements OnInit {

  beverages: Beverage[] = [
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
   

  constructor(private cart: BeverageCartService) { 
    
  }

  ngOnInit(): void {
  }

  addToCart (beverage: Beverage): void {
    this.cart.addToCart(beverage);
    beverage.stock -= beverage.quantity;
    beverage.quantity = 0;
  }

  maxReached(m: string) {
    alert(m);
  }
  
}
