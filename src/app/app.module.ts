import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeveragesListComponent } from './beverages-list/beverages-list.component';
import { FormsModule } from '@angular/forms';
import { BeveragesAboutComponent } from './beverages-about/beverages-about.component';
import { BeveragesDrinksComponent } from './beverages-drinks/beverages-drinks.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BeveragesListComponent,
    BeveragesAboutComponent,
    BeveragesDrinksComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
