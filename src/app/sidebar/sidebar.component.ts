import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  constructor(private themeService: ThemeService) {
    this.themeService.setThemeOnStart();
  }
  handleTheme(): void {
    this.themeService.toggleTheme();
  }
}
