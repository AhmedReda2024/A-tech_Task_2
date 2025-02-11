import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSummaryComponent } from './phone-summary.component';

describe('PhoneSummaryComponent', () => {
  let component: PhoneSummaryComponent;
  let fixture: ComponentFixture<PhoneSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
