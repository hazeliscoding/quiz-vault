import { Question } from './question.model';
import { User } from './user.model';

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  questionCount: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}
