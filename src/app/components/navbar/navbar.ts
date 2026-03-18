import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly menuOpen = signal(false);

  protected toggleMenu() {
    this.menuOpen.update(value => !value);
  }

  protected closeMenu() {
    this.menuOpen.set(false);
  }
}
