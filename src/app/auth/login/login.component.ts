import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      if (email === 'admin@example.com' && password === 'dummy') {
        this.router.navigate(['/admin/dashboard']);
      } else if (email === 'employer@example.com' && password === 'dummy') {
        this.router.navigate(['/employer/dashboard']);
      } else if (email === 'jobseeker@example.com' && password === 'dummy') {
        this.router.navigate(['/jobseeker/dashboard']);
      } else {
        alert('Invalid credentials!');
      }
    }
  }
}

