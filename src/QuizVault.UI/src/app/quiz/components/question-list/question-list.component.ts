import { Component, Input } from '@angular/core';
import { Question } from '../../../core/models/question.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent {
  @Input() public questions: Question[] = [];
}
