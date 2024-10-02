import { Component } from '@angular/core';
import { TeamScoreListComponent } from '../../components/team-score-list/team-score-list.component';
import { TeamListComponent } from '../../components/team-list/team-list.component';
import { TeamMemberListComponent } from '../../components/team-member-list/team-member-list.component';
import { DatePipe } from '@angular/common';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'app-team-detail-page',
  standalone: true,
  imports: [
    TeamScoreListComponent,
    TeamMemberListComponent,
    DatePipe,
    ClarityModule,
  ],
  templateUrl: './team-detail-page.component.html',
  styleUrl: './team-detail-page.component.scss',
})
export class TeamDetailPageComponent {
  public team = {
    id: 'Test',
    name: 'Test',
    creationDate: new Date(),
    createdBy: 'Claude Redfield',
    memberCount: 5,
    maxMemberCount: 10,
    currentScore: 500,
    members: [
      {
        id: 'Test',
        username: 'Max',
        mail: 'test@test.com',
        joined: new Date(),
      },
    ],
    scores: [
      {
        id: 'Test',
        score: 100,
        date: new Date(),
        user: {
          id: 'Test',
          username: 'Max',
          mail: 'test@test.com',
        },
      },
    ],
  };
}
