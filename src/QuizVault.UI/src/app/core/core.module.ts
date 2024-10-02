import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, ClarityModule, RouterModule],
  providers: [provideHttpClient()],
})
export class CoreModule {}
