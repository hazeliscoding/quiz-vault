import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListPageComponent } from './pages/quiz-list-page/quiz-list-page.component';
import { QuizDetailPageComponent } from './pages/quiz-detail-page/quiz-detail-page.component';
import { ClarityModule } from '@clr/angular';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QuizListPageComponent,
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: QuizDetailPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), ClarityModule],
})
export class QuizModule {}
