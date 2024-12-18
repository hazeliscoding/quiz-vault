import { Component } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { QuestionListComponent } from '../../components/question-list/question-list.component';
import { QuizAttemptListComponent } from '../../components/quiz-attempt-list/quiz-attempt-list.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-quiz-detail-page',
  standalone: true,
  imports: [
    ClarityModule,
    QuestionListComponent,
    QuizAttemptListComponent,
    DatePipe
  ],
  templateUrl: './quiz-detail-page.component.html',
  styleUrl: './quiz-detail-page.component.scss',
})
export class QuizDetailPageComponent {
  public quiz = {
    id: 'Test',
    title: 'Test',
    description: 'Test',
    questions: [],
    questionCount: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: {
      username: 'Test',
      mail: 'Test',
    },
    updatedBy: {
      username: 'Test',
      mail: 'Test',
    },
  };
}
