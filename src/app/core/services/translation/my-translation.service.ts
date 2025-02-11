import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root',
})
export class MyTranslationService {
  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platId: object
  ) {
    if (isPlatformBrowser(this.platId)) {
      // Browser
      this.translateService.setDefaultLang('en');

      const savedLang = localStorage.getItem('lang');

      if (savedLang) {
        this.translateService.use(savedLang);
      }

      this.changeDirection();
    }
  }

  changeDirection(): void {
    if (localStorage.getItem('lang') === 'en') {
      // dir ltr
      document.dir = 'ltr';
    } else if (localStorage.getItem('lang') === 'ar') {
      //dir rtl
      document.dir = 'rtl';
    }
  }

  changeLang(lang: string): void {
    if (isPlatformBrowser(this.platId)) {
      localStorage.setItem('lang', lang);
    }

    this.translateService.use(lang);
    this.changeDirection();
  }
}
