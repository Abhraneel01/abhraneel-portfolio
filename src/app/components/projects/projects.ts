import { Component, signal } from '@angular/core';
import { FEATURED_PROJECT, SIDE_PROJECTS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

type Tab = 'features' | 'integrations' | 'challenges';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly featured = FEATURED_PROJECT;
  protected readonly others = SIDE_PROJECTS;
  protected readonly tab = signal<Tab>('features');
  protected readonly tabs: { id: Tab; label: string }[] = [
    { id: 'features', label: 'Key features' },
    { id: 'integrations', label: 'API integrations' },
    { id: 'challenges', label: 'Challenges solved' },
  ];
}
