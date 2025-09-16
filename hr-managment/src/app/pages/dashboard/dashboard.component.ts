import { Component, OnInit } from '@angular/core';

declare var Chart: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  kpis = [
    { label: 'Employees', value: 124, diff: '+4%', trend: 'positive' },
    { label: 'Open Roles', value: 8, diff: '-1%', trend: 'negative' },
    { label: 'Attrition Rate', value: '2.1%', diff: '-0.1%', trend: 'positive' },
    { label: 'Avg. Time to Hire', value: '18d', diff: '+2d', trend: 'negative' }
  ];

  recent = [
    {who:'Shreya Patel', action:'Promoted to Lead Designer', time:'2h'},
    {who:'Rahul Singh', action:'Completed probation', time:'1d'},
    {who:'Nisha Verma', action:'Left company (resigned)', time:'2d'},
  ];

  employees = [
    {id:1001, name:'Aman Sharma', role:'Frontend Engineer', dept:'Engineering', status:'Active'},
    {id:1002, name:'Kavita Rao', role:'UX Designer', dept:'Design', status:'Active'},
    {id:1003, name:'Priya Nair', role:'HR Executive', dept:'HR', status:'On Leave'},
    {id:1004, name:'Vikram Joshi', role:'Backend Engineer', dept:'Engineering', status:'Active'},
    {id:1005, name:'Sonal Patel', role:'Recruiter', dept:'HR', status:'Active'},
  ];

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    try {
      const ctx: any = document.getElementById('perfChart');
      if (!ctx) return;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
          datasets: [{
            label: 'Performance Score',
            data: [72,75,78,74,80,82,85,88,90],
            borderWidth: 2,
            fill: false,
            pointRadius: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio:false,
          legend: { display: false },
          scales: {
            yAxes: [{ ticks: { beginAtZero: false } }]
          }
        }
      });
    } catch (err) {
      console.warn('Chart render failed', err);
    }
  }

}
