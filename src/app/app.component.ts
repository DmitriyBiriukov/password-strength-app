import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  passwordStrength: string = 'weak';

  checkPasswordStrength() {
    if (this.password.length < 8) {
      this.passwordStrength = 'weak';
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[^a-zA-Z0-9]/.test(this.password)) {
      this.passwordStrength = 'strong';
    } else {
      this.passwordStrength = 'medium';
    }
  }
}
