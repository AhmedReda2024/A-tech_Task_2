import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-customer-evaluation',
  imports: [TranslatePipe],
  templateUrl: './customer-evaluation.component.html',
  styleUrl: './customer-evaluation.component.css',
})
export class CustomerEvaluationComponent {}
