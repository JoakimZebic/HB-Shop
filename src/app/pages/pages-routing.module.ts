import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
