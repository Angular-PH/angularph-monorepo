import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  router = inject(Router);
  isDropdownOpen = false;

  menuItems = [
    { path: '/', label: 'Home' },
    { path: '/aboutus', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/ourteam', label: 'Our Team' },
    { path: '/contactus', label: 'Contact us' },
  ];

  toggleDropdown() {
    console.log('Hello');
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(path: string) {
    this.isDropdownOpen = false;
    this.router.navigate([path]);
  }
}
