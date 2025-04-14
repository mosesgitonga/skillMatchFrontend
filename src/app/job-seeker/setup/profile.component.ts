import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobseeker-profile',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  skills: string[] = [];
  skillInput: string = '';
  fullName = '';
  phone = '';
  location = '';
  bio = '';
  experience = '';
  salary = '';
  linkedin = '';
  github = '';

  addSkill(event: KeyboardEvent) {
    const input = this.skillInput.trim();

    if ((event.key === ',' || event.key === 'Enter') && input) {
      event.preventDefault();
      if (!this.skills.includes(input)) {
        this.skills.push(input);
      }
      this.skillInput = '';
    }
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }

  onSubmit() {
    const profile = {
      fullName: this.fullName,
      phone: this.phone,
      location: this.location,
      bio: this.bio,
      skills: this.skills,
      experience: this.experience,
      salary: this.salary,
      linkedin: this.linkedin,
      github: this.github
    };

    console.log('Jobseeker Profile:', profile);
  }
}
