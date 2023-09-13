import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSummaryComponent } from './ai-summary.component';

describe('AiSummaryComponent', () => {
  let component: AiSummaryComponent;
  let fixture: ComponentFixture<AiSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AiSummaryComponent]
    });
    fixture = TestBed.createComponent(AiSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
