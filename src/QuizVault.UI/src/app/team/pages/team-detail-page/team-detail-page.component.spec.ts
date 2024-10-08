import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailPageComponent } from './team-detail-page.component';

describe('TeamDetailPageComponent', () => {
  let component: TeamDetailPageComponent;
  let fixture: ComponentFixture<TeamDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
