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
    path: 'quizzes',
    pathMatch: 'prefix',
    loadChildren: () => import('./quiz/quiz.module').then((m) => m.QuizModule),
  },
  {
    path: 'teams',
    pathMatch: 'prefix',
    loadChildren: () => import('./team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'error',
    pathMatch: 'prefix',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'serach',
    pathMatch: 'prefix',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'users',
    pathMatch: 'prefix',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  }
];
