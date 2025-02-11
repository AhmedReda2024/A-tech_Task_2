import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageAudioComponent } from './percentage-audio.component';

describe('PercentageAudioComponent', () => {
  let component: PercentageAudioComponent;
  let fixture: ComponentFixture<PercentageAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageAudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
