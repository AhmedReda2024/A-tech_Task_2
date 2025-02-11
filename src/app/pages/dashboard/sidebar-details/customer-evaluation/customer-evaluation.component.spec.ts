import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEvaluationComponent } from './customer-evaluation.component';

describe('CustomerEvaluationComponent', () => {
  let component: CustomerEvaluationComponent;
  let fixture: ComponentFixture<CustomerEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
