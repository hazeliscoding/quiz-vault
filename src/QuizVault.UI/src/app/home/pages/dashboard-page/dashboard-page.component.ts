import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizScoreCardComponent } from '../../components/quiz-score-card/quiz-score-card.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [QuizScoreCardComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  constructor(private router: Router) {}

  public goToQuiz() {
    this.router.navigate(['/quiz']);
  }
}
