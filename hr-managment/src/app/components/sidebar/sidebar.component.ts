import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() collapsed = false;              
  @Output() toggleSidebar = new EventEmitter<void>();

  navItems = [
    { label: 'Dashboard', icon: 'fa-home', active: true },
    { label: 'Employees', icon: 'fa-users', active: false },
    { label: 'Attendance', icon: 'fa-calendar-check', active: false },
    { label: 'Reports', icon: 'fa-chart-bar', active: false },
    { label: 'Settings', icon: 'fa-cog', active: false }
  ];

  onToggle() {
    this.toggleSidebar.emit();
  }

}
