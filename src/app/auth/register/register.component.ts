import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule]  // Import FormsModule for template-driven forms
})
export class RegisterComponent {
  role: 'jobseeker' | 'employer' = 'jobseeker'; // Set default role

  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit(): void {
    console.log('Form Submitted!', { fullName: this.fullName, email: this.email, password: this.password });
  }

  switchRole(role: 'jobseeker' | 'employer'): void {
    this.role = role;
  }
}
