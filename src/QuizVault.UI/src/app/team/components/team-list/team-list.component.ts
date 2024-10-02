import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [FormsModule, RouterModule, DatePipe],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss',
})
export class TeamListComponent {
  public teams = [
    {
      id: 'Test',
      name: 'Test',
      creationDate: new Date(),
      createdBy: 'Max Mustermann',
      memberCount: 5,
      maxMemberCount: 10,
    },
  ];
}
