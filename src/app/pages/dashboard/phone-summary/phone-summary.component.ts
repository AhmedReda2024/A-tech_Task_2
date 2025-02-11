import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-phone-summary',
  imports: [TranslatePipe],
  templateUrl: './phone-summary.component.html',
  styleUrl: './phone-summary.component.css',
})
export class PhoneSummaryComponent {}
