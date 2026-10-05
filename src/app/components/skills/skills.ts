import { Component, computed, signal } from '@angular/core';
import { SKILL_GROUPS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
  protected readonly filter = signal<string>('All');
  protected readonly tabs = ['All', ...SKILL_GROUPS.map((g) => g.title)];
  protected readonly visibleGroups = computed(() =>
    this.filter() === 'All' ? this.groups : this.groups.filter((g) => g.title === this.filter()),
  );
}
