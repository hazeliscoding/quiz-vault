import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamOverviewPageComponent } from './pages/team-overview-page/team-overview-page.component';
import { ClarityModule } from '@clr/angular';

const routes: Routes = [
  {
    path: '',
    component: TeamOverviewPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), ClarityModule],
})
export class TeamModule {}
