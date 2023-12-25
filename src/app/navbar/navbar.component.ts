import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu: boolean = true;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
  downloadCV(): void {
    const cvUrl = "";
    window.open(cvUrl, '_blank');
  }
}
