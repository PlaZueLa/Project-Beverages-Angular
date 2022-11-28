import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BebidasAboutComponent } from './bebidas-about/bebidas-about.component';
import { BebidasDrinksComponent } from './bebidas-drinks/bebidas-drinks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'drinks',
    pathMatch: 'full'

  },
  {
    path: 'drinks',
    component: BebidasDrinksComponent
  },
  {
    path: 'about',
    component: BebidasAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
