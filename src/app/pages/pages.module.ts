import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { ShopComponent } from './shop/shop.component';
import { ProductTileComponent } from './shop/product-tile/product-tile.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SharedModule,
    TranslateModule,
    MatCarouselModule,
  ],
  declarations: [PagesComponent, WelcomeComponent, ShopComponent, ProductTileComponent, CartComponent],
})
export class PagesModule {}
