import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiRepliesComponent } from './ai-replies.component';

describe('AiRepliesComponent', () => {
  let component: AiRepliesComponent;
  let fixture: ComponentFixture<AiRepliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AiRepliesComponent]
    });
    fixture = TestBed.createComponent(AiRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
