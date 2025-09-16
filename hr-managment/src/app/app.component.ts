import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hr-dashboard';
  sidebarCollapsed = false;        // For desktop collapse (optional)
  mobileSidebarVisible = false;    // For small screens

  // Toggle sidebar (desktop collapse or mobile overlay)
  toggleSidebar() {
    if (window.innerWidth < 768) {
      // mobile: slide overlay sidebar
      this.mobileSidebarVisible = !this.mobileSidebarVisible;
    } else {
      // desktop: collapse sidebar (optional, can shrink width)
      this.sidebarCollapsed = !this.sidebarCollapsed;
      document.documentElement.style.setProperty(
        '--sidebar-width',
        this.sidebarCollapsed ? '72px' : '260px'
      );
    }
  }

  // Close mobile sidebar when clicking outside
  closeMobileSidebar() {
    if (window.innerWidth < 768) {
      this.mobileSidebarVisible = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    // Reset mobile overlay state when resizing to desktop
    if (window.innerWidth >= 768) {
      this.mobileSidebarVisible = false;
    }
  }
}
