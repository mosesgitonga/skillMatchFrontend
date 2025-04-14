import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recruiter = {
    name: 'Moses Gitonga',
    location: 'Nairobi, Kenya'
  };

  stats = {
    activePostings: 5,
    applications: 38,
    shortlisted: 12
  };

  candidates = [
    {
      name: 'John Doe',
      jobTitle: 'Software Engineer',
      location: 'New York',
      status: ''
    },
    {
      name: 'Jane Smith',
      jobTitle: 'Frontend Developer',
      location: 'San Francisco',
      status: ''
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  shortlistCandidate(index: number): void {
    this.candidates[index].status = 'shortlisted';
    console.log(`${this.candidates[index].name} shortlisted.`);
  }

  rejectCandidate(index: number): void {
    this.candidates[index].status = 'rejected';
    console.log(`${this.candidates[index].name} rejected.`);
  }
}
