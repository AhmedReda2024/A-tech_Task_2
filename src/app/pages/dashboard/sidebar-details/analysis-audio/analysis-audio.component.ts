import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-analysis-audio',
  imports: [TranslatePipe],
  templateUrl: './analysis-audio.component.html',
  styleUrl: './analysis-audio.component.css',
})
export class AnalysisAudioComponent {
  readonly translateService = inject(TranslateService);
}
