import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {

  drink = {
    "name": "Coca Cola",
    "type": "Gaseosa",
    "price": 350,
    "stock": 6,
    "image": "assets/img/cocacola.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
