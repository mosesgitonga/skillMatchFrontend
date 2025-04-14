import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  registerables,
  ChartConfiguration,
  ChartType,
  ChartOptions
} from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

@Component({
  selector: 'app-jobseeker-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = {
    name: 'Moses',
    location: 'Nyeri, Kenya',
    skills: ['Angular', 'TypeScript', 'Flask', 'SQL']
  };

  stats = {
    applied: 10,
    interviews: 3,
    shortlisted: 5
  };

  // Chart data for application statuses
  appChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Applied', 'Interview', 'Shortlisted'],
    datasets: [
      {
        data: [10, 3, 5],
        backgroundColor: ['#4a90e2', '#48bb78', '#f6ad55'],
        borderWidth: 0,
        hoverOffset: 4
      }
    ]
  };

  appChartType: ChartType = 'doughnut';
  
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#2d3748',
        bodyColor: '#2d3748',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        usePointStyle: true,
        callbacks: {
          title: function(tooltipItems) {
            return tooltipItems[0].label;
          }
        }
      }
    },
  };

  constructor() {}

  ngOnInit(): void {
  }
}