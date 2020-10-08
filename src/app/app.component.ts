import { CartCounterService } from './shared/services/cart-counter.service';
import { LocalStorageService } from './shared/services/local-storage/local-storage.service';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  defaultLang: string;
  subscriptions = new Subscription();
  sidebarWelcomePage = false;
  route: string;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private lcs: LocalStorageService,
    private counterService: CartCounterService
  ) {
    translate.addLangs(['en', 'sr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    const browserLangAbbr = browserLang.split('-')[0];
    this.defaultLang = browserLangAbbr;
    translate.use(browserLangAbbr.match(/en|sr/) ? browserLangAbbr : 'en');

    const regex = new RegExp('^/welcome$');
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.route = val.url;
        if (regex.test(val.url) || val.url === '/') {
          this.sidebarWelcomePage = true;
        } else {
          this.sidebarWelcomePage = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.counterService.counter = this.lcs.get('cart')?.length || null;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
