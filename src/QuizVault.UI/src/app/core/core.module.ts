import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, ClarityModule],
  providers: [provideHttpClient()],
})
export class CoreModule {}
