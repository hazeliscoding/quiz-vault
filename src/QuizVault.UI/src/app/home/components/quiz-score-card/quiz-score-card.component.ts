import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-score-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-score-card.component.html',
  styleUrl: './quiz-score-card.component.scss',
})
export class QuizScoreCardComponent {
  @Input() public title: string = 'Your Score';
  @Input() public actionTitle: string | undefined = 'Go to Quiz';
  @Input() public score: number = 0;
  @Input() public action: EventEmitter<void> = new EventEmitter<void>();

  public onAction() {
    this.action.emit();
  }
}
