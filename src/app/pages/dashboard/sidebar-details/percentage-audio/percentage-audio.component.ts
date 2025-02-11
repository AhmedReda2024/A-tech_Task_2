import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'app-percentage-audio',
  imports: [NgxEchartsDirective, TranslatePipe],
  templateUrl: './percentage-audio.component.html',
  styleUrl: './percentage-audio.component.css',
})
export class PercentageAudioComponent {
  chartOptions: any = null; // Set to null to prevent SSR errors
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Initialize chart options only if running in the browser
    if (this.isBrowser) {
      this.chartOptions = {
        series: [
          {
            type: 'pie',
            startAngle: 180, // Start from the top
            radius: ['80%', '100%'], // Adjust thickness
            center: ['50%', '50%'], // Move it up to create a semi-circle effect
            data: [
              { value: 60, itemStyle: { color: '#e5e7eb ' } }, // Listening (gray)
              { value: 4, itemStyle: { color: 'transparent' } }, // Gap/Spacing
              { value: 40, itemStyle: { color: '#3b82f6' } }, // Speaking (blue)
              { value: 100, itemStyle: { color: 'transparent' } },
            ],
            label: { show: false },
            silent: true,
          },
        ],
      };
    }
  }
}
