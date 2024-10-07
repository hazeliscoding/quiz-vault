import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetailPageComponent } from './quiz-detail-page.component';

describe('QuizDetailPageComponent', () => {
  let component: QuizDetailPageComponent;
  let fixture: ComponentFixture<QuizDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
