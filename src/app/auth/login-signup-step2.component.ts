import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-signup-step2',
  templateUrl: './login-signup-step2.component.html',
  standalone: true,
  imports: [FormsModule,CommonModule],
//   styleUrls: ['./login-signup-step2.component.css']
})
export class LoginSignupStep2Component implements OnInit {
  step1Data: any;
  step2Data = {
    organizationName: '',
    designation: '',
    birthDate: '',
    city: '',
    pincode: ''
  };

  organizationList: string[] = [];
  designationOptions = ['Developer', 'Designer', 'Manager'];

  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.step1Data = JSON.parse(sessionStorage.getItem('userData') || '{}');

    this.authService.getOrganizations().subscribe(data => {
      this.organizationList = data;
    });

    const storedStep2Data = sessionStorage.getItem('step2Data');
    if (storedStep2Data) {
      this.step2Data = JSON.parse(storedStep2Data);
    }
  }

  verifyOrganization() {
    if (!this.organizationList.includes(this.step2Data.organizationName)) {
      this.errorMessage = 'Unknown organization-id';
    } else {
      this.errorMessage = '';
    }
  }

  back() {
    sessionStorage.setItem('step2Data', JSON.stringify(this.step2Data));
    this.router.navigate(['/auth/step1']);
  }

  submit() {
    sessionStorage.setItem('step2Data', JSON.stringify(this.step2Data));
    console.log('Data submitted:', this.step1Data, this.step2Data);
  }
}
