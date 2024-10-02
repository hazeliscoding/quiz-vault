import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-leaderboard-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-leaderboard-table.component.html',
  styleUrl: './team-leaderboard-table.component.scss'
})
export class TeamLeaderboardTableComponent {
  public teamList =[{
    position: 1,
    name: 'Team 01',
    week: 'KW 50 2024',
    score: '78.097'
  }]; 
}
