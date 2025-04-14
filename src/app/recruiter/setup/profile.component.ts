import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  companyName = '';
  industry = '';
  location = '';
  size = '';
  bio = '';
  email = '';
  phone = '';
  website = '';
  linkedin = '';

  onSubmit() {
    const employerProfile = {
      companyName: this.companyName,
      industry: this.industry,
      location: this.location,
      size: this.size,
      bio: this.bio,
      email: this.email,
      phone: this.phone,
      website: this.website,
      linkedin: this.linkedin
    };
    console.log('Employer Profile:', employerProfile);
  }
}
