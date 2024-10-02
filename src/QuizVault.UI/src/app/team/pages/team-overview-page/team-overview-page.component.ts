import { Component } from '@angular/core';
import { TeamListComponent } from "../../components/team-list/team-list.component";

@Component({
  selector: 'app-team-overview-page',
  standalone: true,
  imports: [TeamListComponent],
  templateUrl: './team-overview-page.component.html',
  styleUrl: './team-overview-page.component.scss'
})
export class TeamOverviewPageComponent {

}
