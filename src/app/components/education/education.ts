import { Component } from '@angular/core';
import { CERTIFICATIONS, EDUCATION } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationSection {
  protected readonly education = EDUCATION;
  protected readonly certifications = CERTIFICATIONS;
}
