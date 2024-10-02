import { Component } from '@angular/core';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ClarityModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
