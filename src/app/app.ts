import { Component, inject } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { EducationSection } from './components/education/education';
import { ExperienceSection } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { TableDemo } from './components/table-demo/table-demo';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, ExperienceSection, Projects, TableDemo, EducationSection, Contact, Footer],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-table-demo />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {
  // Inject early so the saved theme is applied on startup
  private readonly theme = inject(ThemeService);
}
