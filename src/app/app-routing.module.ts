import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesAboutComponent } from './beverages-about/beverages-about.component';
import { BeveragesDrinksComponent } from './beverages-drinks/beverages-drinks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beverages',
    pathMatch: 'full'

  },
  {
    path: 'beverages',
    component: BeveragesDrinksComponent
  },
  {
    path: 'about',
    component: BeveragesAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
