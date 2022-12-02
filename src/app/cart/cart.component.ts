import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { BeverageCartService } from '../beverage-cart.service';
import { Beverage } from '../beverages-list/beverage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 cartList$!: Observable<Beverage[]>; 
  constructor(private cart: BeverageCartService) { 
 this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  

}
