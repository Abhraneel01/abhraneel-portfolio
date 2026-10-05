import { Pipe, PipeTransform } from '@angular/core';

/** Turns a start/end pair (yyyy-mm) into "1 yr 3 mos". end = null means "today". */
@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(start: string, end: string | null): string {
    const [sy, sm] = start.split('-').map(Number);
    const now = new Date();
    const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
    const total = (ey - sy) * 12 + (em - sm);
    const years = Math.floor(total / 12);
    const months = total % 12;
    const parts: string[] = [];
    if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    if (months) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
    return parts.join(' ') || '< 1 mo';
  }
}

/** "2025-07" -> "Jul 2025" */
@Pipe({ name: 'monthYear' })
export class MonthYearPipe implements PipeTransform {
  private static readonly MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  transform(value: string | null): string {
    if (!value) return 'Present';
    const [y, m] = value.split('-').map(Number);
    return `${MonthYearPipe.MONTHS[m - 1]} ${y}`;
  }
}
