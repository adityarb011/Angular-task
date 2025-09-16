import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search = '';
  constructor() { }

  ngOnInit(): void {
  }

  @Output() toggleSidebar = new EventEmitter<void>();

  notifications = [
    {text:'Salary report generated', time:'2h'},
    {text:'New employee onboarded', time:'1d'},
    {text:'Policy updated', time:'3d'}
  ];

  onToggle() {
    this.toggleSidebar.emit();
  }
}
