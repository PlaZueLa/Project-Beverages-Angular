import { Component, OnInit } from '@angular/core';
import { BeverageCartService } from '../beverage-cart.service';
import { BeverageDataService } from '../beverage-data.service';
import { Beverage } from './beverage'
@Component({
  selector: 'app-beverages-list',
  templateUrl: './beverages-list.component.html',
  styleUrls: ['./beverages-list.component.scss']
})
export class BeveragesListComponent implements OnInit {

  
  beverages: Beverage[] = [];
   
  constructor(
    private cart: BeverageCartService,
    private beveragesDataService: BeverageDataService) { 
    
  }

  ngOnInit(): void {
    this.beveragesDataService.getAll()
    .subscribe(beverages => this.beverages = beverages); 
    
   
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
 