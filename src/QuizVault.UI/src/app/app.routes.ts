import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    pathMatch: 'prefix',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'quiz',
    pathMatch: 'prefix',
    loadChildren: () => import('./quiz/quiz.module').then((m) => m.QuizModule),
  },
  {
    path: 'teams',
    pathMatch: 'prefix',
    loadChildren: () => import('./team/team.module').then((m) => m.TeamModule),
  },
];
