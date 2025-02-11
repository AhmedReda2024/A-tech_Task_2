import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisAudioComponent } from './analysis-audio.component';

describe('AnalysisAudioComponent', () => {
  let component: AnalysisAudioComponent;
  let fixture: ComponentFixture<AnalysisAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisAudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
