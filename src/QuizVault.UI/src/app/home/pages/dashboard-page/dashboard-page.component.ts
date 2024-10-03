import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizScoreCardComponent } from '../../components/quiz-score-card/quiz-score-card.component';
import { RecentQuizTableComponent } from "../../components/recent-quiz-table/recent-quiz-table.component";
import { LeaderboardTableComponent } from "../../components/leaderboard-table/leaderboard-table.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [QuizScoreCardComponent, RecentQuizTableComponent, LeaderboardTableComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  constructor(private router: Router) {}

  public goToQuiz() {
    this.router.navigate(['/quiz']);
  }
}
