import { Component } from '@angular/core';
import { Quiz } from '../../../core/models/quiz.model';
import { QuizListComponent } from "../../components/quiz-list/quiz-list.component";

@Component({
  selector: 'app-quiz-list-page',
  standalone: true,
  imports: [QuizListComponent],
  templateUrl: './quiz-list-page.component.html',
  styleUrl: './quiz-list-page.component.scss',
})
export class QuizListPageComponent {
  public quizzes: Quiz[] = [
    {
      id: 'test',
      title: 'Test',
      description: 'Test',
      questions: [],
      questionCount: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: {
        username: 'test',
        mail: 'test',
      },
      updatedBy: {
        username: 'test',
        mail: 'test',
      },
    },
  ];
}
