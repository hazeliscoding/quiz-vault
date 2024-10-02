import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ClarityModule, FormsModule, RouterModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  public form = {
    username: '',
    mail: '',
    password: '',
    confirmPassword: '',
  };
}
