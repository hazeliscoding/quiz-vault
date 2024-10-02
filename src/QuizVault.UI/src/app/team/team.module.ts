import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TeamOverviewPageComponent } from './pages/team-overview-page/team-overview-page.component';

const routes: Routes = [
  {
    path: '',
    component: TeamOverviewPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class TeamModule {}
