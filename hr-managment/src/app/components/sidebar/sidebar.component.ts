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

  @Output() toggleSidebar = new EventEmitter<void>();

  navItems = [
    {icon:'fa-chart-pie', label:'Dashboard', active:true},
    {icon:'fa-users', label:'Employees'},
    {icon:'fa-briefcase', label:'Jobs'},
    {icon:'fa-calendar-alt', label:'Calendar'},
    {icon:'fa-file-alt', label:'Reports'},
    {icon:'fa-cog', label:'Settings'}
  ];

  onToggle() {
    this.toggleSidebar.emit();
  }
}
