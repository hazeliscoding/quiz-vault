import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAttemptListComponent } from './quiz-attempt-list.component';

describe('QuizAttemptListComponent', () => {
  let component: QuizAttemptListComponent;
  let fixture: ComponentFixture<QuizAttemptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizAttemptListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizAttemptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
