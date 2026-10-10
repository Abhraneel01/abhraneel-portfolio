import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly highlights = [
    { icon: '🧱', title: 'Reusable components', text: 'Clean, configurable building blocks shared across modules.' },
    { icon: '📝', title: 'Reactive Forms', text: 'Complex forms with custom validators and clear error states.' },
    { icon: '🔐', title: 'Auth & Interceptors', text: 'Interceptors, headers, cookies, sessions and error handling.' },
    { icon: '🐞', title: 'Production debugging', text: 'Tracking down UI and API issues with Chrome DevTools & Postman.' },
  ];
}
