import { Component, Input } from '@angular/core';
import { QuizAttempt } from '../../../core/models/quiz-attempt.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-attempt-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-attempt-list.component.html',
  styleUrl: './quiz-attempt-list.component.scss',
})
export class QuizAttemptListComponent {
  @Input() attempts: QuizAttempt[] = [];

  public getFinishedQuestionCount(attempt: QuizAttempt): number {
    return attempt.attemptAnswers.filter((x) => x.answer !== undefined).length;
  }

  public getQuizScore(attempt: QuizAttempt): number {
    return attempt.attemptAnswers
      .map((x) => x.resultingScore)
      .reduce((a, b) => a + b);
  }
}
