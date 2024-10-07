import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';

const routes: Routes = [
  {
    path: ':username',
    pathMatch: 'full',
    component: UserDetailPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [],
})
export class UserModule {}
