import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  protected readonly profile = PROFILE;
  protected readonly typed = signal('');
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // Simple typewriter effect cycling through the roles
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let pause = 0;

    const id = setInterval(() => {
      if (pause > 0) {
        pause--;
        return;
      }
      const role = this.profile.roles[roleIndex];
      if (!deleting) {
        charIndex++;
        if (charIndex === role.length) {
          deleting = true;
          pause = 18;
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % this.profile.roles.length;
          pause = 4;
        }
      }
      this.typed.set(role.slice(0, charIndex));
    }, 80);

    this.destroyRef.onDestroy(() => clearInterval(id));
  }
}
