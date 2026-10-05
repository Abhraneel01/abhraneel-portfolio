import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { DurationPipe, MonthYearPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective, DurationPipe, MonthYearPipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceSection {
  protected readonly jobs = EXPERIENCE;
}
