import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-quiz-table',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './recent-quiz-table.component.html',
  styleUrl: './recent-quiz-table.component.scss'
})
export class RecentQuizTableComponent {
  public quizzes = [{
    courseId: 'COSC1301',
    courseName: 'Test 1',
    date: new Date(),
    score: 1234
  }];
}
