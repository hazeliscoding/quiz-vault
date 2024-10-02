import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScoreListComponent } from './team-score-list.component';

describe('TeamScoreListComponent', () => {
  let component: TeamScoreListComponent;
  let fixture: ComponentFixture<TeamScoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamScoreListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamScoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
