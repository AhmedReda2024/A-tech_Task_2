import { Component, inject } from '@angular/core';
import { MyTranslationService } from '../../../core/services/translation/my-translation.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly mytranslateService = inject(MyTranslationService);

  readonly translateService = inject(TranslateService);

  isDropdownOpen = false;

  changeLanguage(lang: string) {
    this.mytranslateService.changeLang(lang);
  }

  toggleDropDown(): void {
    this.isDropdownOpen = !this.isDropdownOpen; // Close dropdown after selection
  }
}
