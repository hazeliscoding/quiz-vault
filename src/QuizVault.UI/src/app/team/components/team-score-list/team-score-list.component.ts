import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-score-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './team-score-list.component.html',
  styleUrl: './team-score-list.component.scss',
})
export class TeamScoreListComponent {
  @Input() scores: {
    id: string;
    score: number;
    date: Date;
    user: {
      id: string;
      username: string;
      mail: string;
    };
  }[] = [];
}
