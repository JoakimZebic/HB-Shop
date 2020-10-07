import { Subscription } from 'rxjs';
import { ProductModel } from './../../shared/models/product.model';
import { ProductsService } from './../../shared/services/http/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'hb-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {
  products: ProductModel[];
  subscription = new Subscription();
  isLoading = true;

  constructor(private ps: ProductsService) {}

  ngOnInit(): void {
    const productSub = this.ps.getProducts().subscribe(
      (res) => {
        this.products = res;

        // Imitate waiting for BE
        setTimeout(() => {
          this.isLoading = false;
        }, 2500);
      },
      (error) => console.log('Error: ' + error)
    );

    this.subscription.add(productSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
