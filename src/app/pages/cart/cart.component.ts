import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { CartCounterService } from './../../shared/services/cart-counter.service';
import { LocalStorageService } from './../../shared/services/local-storage/local-storage.service';
import { ProductModel } from './../../shared/models/product.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  animate,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { bounceOutLeftAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'hb-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('removeItemAnimation', [
      transition(':enter', []),
      transition(':leave', [
        style({ backgroundColor: 'var(--error)' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation),
      ]),
    ]),
  ],
})
export class CartComponent implements OnInit, OnDestroy {
  cartProducts: ProductModel[];
  totalSum: number;

  buyForm: FormGroup;
  checkoutCompleteModal = false;
  lang: string;

  subscription = new Subscription();

  constructor(
    private lcs: LocalStorageService,
    private counterService: CartCounterService,
    private router: Router,
    private translate: TranslateService
  ) {
    const translateSub = translate.onLangChange.subscribe((selectedLang) => {
      this.lang = selectedLang.lang;
      this.calcTotalSum(this.cartProducts);
    });

    this.subscription.add(translateSub);
    this.lang = this.translate.currentLang;
  }

  ngOnInit(): void {
    this.cartProducts = this.lcs.get('cart') || [];
    this.cartProducts.length
      ? this.calcTotalSum(this.cartProducts)
      : (this.totalSum = 0);

    this.initBuyForm();
  }

  initBuyForm(): void {
    this.buyForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      shippingAddress: new FormControl('', [Validators.required]),
    });
  }

  removeFromCart(productIndex: number): void {
    this.cartProducts.splice(productIndex, 1);

    this.lcs.add('cart', this.cartProducts);
    this.cartProducts.length
      ? this.calcTotalSum(this.cartProducts)
      : (this.totalSum = 0);
    this.counterService.counter = this.cartProducts.length;
  }

  calcTotalSum(products: ProductModel[]): void {
    this.totalSum = 0;

    for (const product of products) {
      this.totalSum += product.price[this.lang].value;
    }
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  checkout(): void {
    console.log(this.buyForm.value);
    this.checkoutCompleteModal = true;

    this.cartProducts = [];
    this.lcs.delete('cart');
    this.totalSum = 0;
    this.buyForm.reset();
    this.counterService.counter = 0;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
