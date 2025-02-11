import { Component } from '@angular/core';
import { AudioComponent } from './audio/audio.component';
import { PercentageAudioComponent } from './percentage-audio/percentage-audio.component';
import { AnalysisAudioComponent } from './analysis-audio/analysis-audio.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CustomerEvaluationComponent } from './customer-evaluation/customer-evaluation.component';

@Component({
  selector: 'app-sidebar-details',
  imports: [
    AudioComponent,
    PercentageAudioComponent,
    AnalysisAudioComponent,
    EvaluationComponent,
    CustomerEvaluationComponent,
  ],
  templateUrl: './sidebar-details.component.html',
  styleUrl: './sidebar-details.component.css',
})
export class SidebarDetailsComponent {}
