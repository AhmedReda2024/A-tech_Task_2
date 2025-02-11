import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarDetailsComponent } from './sidebar-details/sidebar-details.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneSummaryComponent } from './phone-summary/phone-summary.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    HeaderComponent,
    SidebarDetailsComponent,
    PhoneDetailsComponent,
    PhoneSummaryComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
