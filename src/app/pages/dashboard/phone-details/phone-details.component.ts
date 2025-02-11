import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-phone-details',
  imports: [TranslatePipe],
  templateUrl: './phone-details.component.html',
  styleUrl: './phone-details.component.css',
})
export class PhoneDetailsComponent {
  readonly translateService = inject(TranslateService);
}
