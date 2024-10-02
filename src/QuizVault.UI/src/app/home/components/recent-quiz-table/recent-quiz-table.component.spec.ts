import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentQuizTableComponent } from './recent-quiz-table.component';

describe('RecentQuizTableComponent', () => {
  let component: RecentQuizTableComponent;
  let fixture: ComponentFixture<RecentQuizTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentQuizTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentQuizTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
