import { CartCounterService } from './../../services/cart-counter.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input('defaultLang')
  set defaultLang(value: string) {
    if (value) {
      this.selectedLang = value;
    }
  }

  @Input() isWelcomePage = false;

  selectedLang: any;
  languages = [
    {
      id: 'en',
      label: 'EN',
      active: true,
    },
    {
      id: 'sr',
      label: 'SR',
      active: false,
    },
  ];

  cartCounter: number;
  bounceCounter = false;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private counterService: CartCounterService
  ) {
    counterService.counterValue.subscribe(
      (nextValue) => {
        this.bounceCounter = true;
        this.cartCounter = nextValue;

        setTimeout(() => {
          this.bounceCounter = false;
        }, 1000);
      },
      (error) => console.warn('Error: ' + error)
    );
  }

  ngOnInit(): void {}

  languageChange(langId): void {
    this.translate.use(langId);
    for (let lang of this.languages) {
      lang.active = lang.id === langId;
    }
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
