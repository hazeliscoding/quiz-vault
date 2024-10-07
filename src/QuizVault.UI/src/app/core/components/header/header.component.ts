import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  angleIcon,
  ClarityIcons,
  homeIcon,
  pencilIcon,
  talkBubblesIcon,
  trashIcon,
  userIcon,
} from '@cds/core/icon';
import { ClarityModule } from '@clr/angular';

ClarityIcons.addIcons(
  userIcon,
  talkBubblesIcon,
  homeIcon,
  pencilIcon,
  trashIcon,
  angleIcon
);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ClarityModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public searchTerm = '';

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/search'], {
      queryParams: { search: this.searchTerm },
    });
  }
}
