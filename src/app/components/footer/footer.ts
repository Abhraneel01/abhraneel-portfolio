import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container inner">
        <p>Designed &amp; built by <strong>{{ profile.name }}</strong> with Angular · © {{ year }}</p>
        <div class="links">
          <a [href]="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
          <a [href]="'mailto:' + profile.email">Email</a>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    footer { border-top: 1px solid var(--border); padding: 28px 0; font-size: 0.88rem; color: var(--muted); }
    .inner { display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; align-items: center; }
    p { margin: 0; }
    .links { display: flex; gap: 18px; }
    .links a { color: var(--muted); }
    .links a:hover { color: var(--accent); }
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
