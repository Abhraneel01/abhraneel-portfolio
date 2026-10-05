import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly profile = PROFILE;
  protected readonly links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'demo', label: 'Live Demo' },
    { id: 'contact', label: 'Contact' },
  ];
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly active = signal('');

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
    let current = '';
    for (const link of this.links) {
      const el = document.getElementById(link.id);
      if (el && el.getBoundingClientRect().top <= 120) current = link.id;
    }
    this.active.set(current);
  }

  protected close(): void {
    this.menuOpen.set(false);
  }
}
