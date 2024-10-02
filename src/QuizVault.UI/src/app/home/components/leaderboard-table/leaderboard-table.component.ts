import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard-table.component.html',
  styleUrl: './leaderboard-table.component.scss',
})
export class LeaderboardTableComponent {
  public leaderList = [
    {
      position: 1,
      username: 'Claude Redfield',
      week: 'KW 50 2024',
      score: '78.097',
    },
  ];
}
