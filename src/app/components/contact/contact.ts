import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PROFILE } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

/** Custom validator: rejects values that are only whitespace. */
export const notBlank: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
  typeof control.value === 'string' && control.value.length > 0 && control.value.trim().length === 0 ? { blank: true } : null;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  protected readonly profile = PROFILE;
  protected readonly sent = signal(false);
  protected readonly copied = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), notBlank]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, notBlank]],
    message: ['', [Validators.required, Validators.minLength(10), notBlank]],
  });

  protected invalid(name: 'name' | 'email' | 'subject' | 'message'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  /** No backend: opens the visitor's email client with the message pre-filled. */
  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, subject, message } = this.form.getRawValue();
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${this.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.sent.set(true);
    this.form.reset();
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }
}
