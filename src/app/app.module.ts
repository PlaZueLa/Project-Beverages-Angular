import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinksListComponent } from './drinks-list/drinks-list.component';
import { FormsModule } from '@angular/forms';
import { BebidasAboutComponent } from './bebidas-about/bebidas-about.component';
import { BebidasDrinksComponent } from './bebidas-drinks/bebidas-drinks.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksListComponent,
    BebidasAboutComponent,
    BebidasDrinksComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
