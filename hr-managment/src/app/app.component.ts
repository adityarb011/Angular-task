import { Component, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hr-dashboard';
  sidebarCollapsed = false;
  mobileSidebarVisible = false;
  windowWidth = window.innerWidth;

  toggleSidebar() {
    if (this.windowWidth < 767) {
      this.mobileSidebarVisible = !this.mobileSidebarVisible;
      document.body.classList.toggle('no-scroll', this.mobileSidebarVisible);
    } else {
      this.sidebarCollapsed = !this.sidebarCollapsed;
      document.documentElement.style.setProperty(
        '--sidebar-width',
        this.sidebarCollapsed ? '72px' : '260px'
      );
    }
  }

  closeMobileSidebar() {
    if (this.windowWidth < 767) {
      this.mobileSidebarVisible = false;
      document.body.classList.remove('no-scroll');
    }
  }


  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth >= 767) {
      this.mobileSidebarVisible = false;
    }
  }
}
