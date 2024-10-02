import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './team-member-list.component.html',
  styleUrl: './team-member-list.component.scss',
})
export class TeamMemberListComponent {
  @Input() members: {
    id: string;
    username: string;
    mail: string;
    joined: Date;
  }[] = [];
}
