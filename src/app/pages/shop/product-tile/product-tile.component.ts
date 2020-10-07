import { CartCounterService } from './../../../shared/services/cart-counter.service';
import { LocalStorageService } from './../../../shared/services/local-storage/local-storage.service';
import { ProductModel } from './../../../shared/models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hb-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
})
export class ProductTileComponent implements OnInit {
  @Input() product: ProductModel;

  isModalOpened = false;
  isClicked = false;

  constructor(
    private lcs: LocalStorageService,
    private counterService: CartCounterService
  ) {}

  ngOnInit(): void {}

  addToCart(): void {
    this.isClicked = true;

    setTimeout(() => {
      this.isClicked = false;
    }, 600);

    const oldCart: ProductModel[] = this.lcs.get('cart') || [];
    const newCart: ProductModel[] = [this.product, ...oldCart];

    this.lcs.add('cart', newCart);
    this.counterService.counter = newCart.length;
  }
}
