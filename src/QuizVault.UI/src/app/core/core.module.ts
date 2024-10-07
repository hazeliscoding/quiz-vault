import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SearchPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [provideHttpClient()],
})
export class CoreModule {}
