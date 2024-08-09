import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login-signup-step1',
  templateUrl: './login-signup-step1.component.html',
  standalone: true,
  imports: [FormsModule],
 // styleUrls: ['./login-signup-step1.component.css']
})
export class LoginSignupStep1Component {
  userData = {
    name: '',
    emailOrPhone: '',
    password: ''
  };

  constructor(private router: Router) {}

  continue() {
    sessionStorage.setItem('userData', JSON.stringify(this.userData));
    this.router.navigate(['/auth/step2']);
  }
}
