import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationWithVisualFeedbackComponent } from './validation-with-visual-feedback.component';

describe('ValidationWithVisualFeedbackComponent', () => {
  let component: ValidationWithVisualFeedbackComponent;
  let fixture: ComponentFixture<ValidationWithVisualFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationWithVisualFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationWithVisualFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
