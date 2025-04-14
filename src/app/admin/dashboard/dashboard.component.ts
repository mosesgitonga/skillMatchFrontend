import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admin = {
    name: 'Moses Gitonga',
    location: 'Nairobi, Kenya'
  };

  stats = {
    totalUsers: 150,
    recruiters: 45,
    jobSeekers: 105
  };

  users = [
    { name: 'Alice Kim', role: 'recruiter', status: 'active' },
    { name: 'John Doe', role: 'job-seeker', status: 'inactive' },
    { name: 'Jane Admin', role: 'admin', status: 'active' }
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleStatus(index: number): void {
    const user = this.users[index];
    user.status = user.status === 'active' ? 'inactive' : 'active';
    console.log(`${user.name} is now ${user.status}`);
  }

  promoteToAdmin(index: number): void {
    const user = this.users[index];
    if (user.role !== 'admin') {
      user.role = 'admin';
      console.log(`${user.name} has been promoted to admin.`);
    }
  }
}
