import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu: boolean = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    console.log("Menu toggled");
  }
  downloadCV(): void {
    const cvUrl = "";
    window.open(cvUrl, '_blank');
  }
}
