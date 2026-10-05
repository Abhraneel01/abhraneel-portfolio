import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDragPreview, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, DestroyRef, OnInit, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { RevealDirective } from '../../directives/reveal.directive';
import { MockOrderService, Order, OrderStatus } from '../../services/mock-order.service';

interface ColumnDef {
  key: keyof Order;
  label: string;
  visible: boolean;
}

const STORAGE_KEY = 'ak-demo-columns';
const PAGE_SIZE = 20;

const DEFAULT_COLUMNS: ColumnDef[] = [
  { key: 'id', label: 'Order #', visible: true },
  { key: 'customer', label: 'Customer', visible: true },
  { key: 'origin', label: 'Origin', visible: true },
  { key: 'destination', label: 'Destination', visible: true },
  { key: 'carrier', label: 'Carrier', visible: false },
  { key: 'status', label: 'Status', visible: true },
  { key: 'date', label: 'Ship date', visible: true },
  { key: 'amount', label: 'Amount', visible: true },
];

@Component({
  selector: 'app-table-demo',
  imports: [CdkDropList, CdkDrag, CdkDragHandle, CdkDragPreview, ReactiveFormsModule, DatePipe, CurrencyPipe, RevealDirective],
  templateUrl: './table-demo.html',
  styleUrl: './table-demo.scss',
})
export class TableDemo implements OnInit {
  private readonly api = inject(MockOrderService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly statuses: (OrderStatus | 'All')[] = ['All', 'Quoted', 'Booked', 'In Transit', 'Delivered', 'Cancelled'];
  protected readonly skeletonRows = [1, 2, 3, 4, 5];

  // Column preferences (persisted — in production this was a REST API, here it's localStorage)
  protected readonly columns = signal<ColumnDef[]>(this.restoreColumns());
  protected readonly visibleColumns = computed(() => this.columns().filter((c) => c.visible));
  protected readonly settingsOpen = signal(false);

  // Data + query state
  protected readonly rows = signal<Order[]>([]);
  protected readonly total = signal(0);
  protected readonly loading = signal(false);
  protected readonly sortKey = signal<keyof Order>('date');
  protected readonly sortDir = signal<'asc' | 'desc'>('desc');
  protected readonly status = signal<OrderStatus | 'All'>('All');
  protected readonly search = new FormControl('', { nonNullable: true });
  protected readonly hasMore = computed(() => this.rows().length < this.total());

  private page = 0;
  private request?: Subscription;

  constructor() {
    effect(() => {
      const prefs = this.columns().map(({ key, visible }) => ({ key, visible }));
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
      } catch {
        /* ignore */
      }
    });
  }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.load(true));
    this.destroyRef.onDestroy(() => this.request?.unsubscribe());
    this.load(true);
  }

  // ---------- Data loading (server-side paging/sorting/filtering + infinite scroll) ----------
  protected load(reset: boolean): void {
    if (reset) {
      this.page = 0;
      this.rows.set([]);
    }
    this.request?.unsubscribe(); // cancel any in-flight request (like switchMap)
    this.loading.set(true);
    this.request = this.api
      .getOrders({
        page: this.page,
        size: PAGE_SIZE,
        sortKey: this.sortKey(),
        sortDir: this.sortDir(),
        search: this.search.value,
        status: this.status(),
      })
      .subscribe((res) => {
        this.rows.update((r) => [...r, ...res.rows]);
        this.total.set(res.total);
        this.loading.set(false);
      });
  }

  protected onScroll(event: Event): void {
    const el = event.target as HTMLElement;
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 60;
    if (nearBottom && !this.loading() && this.hasMore()) {
      this.page++;
      this.load(false);
    }
  }

  protected sortBy(key: keyof Order): void {
    if (this.sortKey() === key) {
      this.sortDir.update((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      this.sortKey.set(key);
      this.sortDir.set('asc');
    }
    this.load(true);
  }

  protected setStatus(value: string): void {
    this.status.set(value as OrderStatus | 'All');
    this.load(true);
  }

  // ---------- Column configuration ----------
  /** Reorder from the settings panel (indexes are on the FULL column list). */
  protected dropInPanel(event: CdkDragDrop<ColumnDef[]>): void {
    const cols = [...this.columns()];
    moveItemInArray(cols, event.previousIndex, event.currentIndex);
    this.columns.set(cols);
  }

  /**
   * Reorder by dragging table headers. Indexes here are on the VISIBLE columns only,
   * so map them back to the full list — otherwise hidden columns get lost/shuffled
   * (the exact bug fixed in ShipCarte).
   */
  protected dropHeader(event: CdkDragDrop<ColumnDef[]>): void {
    const visible = this.visibleColumns();
    const cols = [...this.columns()];
    const from = cols.indexOf(visible[event.previousIndex]);
    const to = cols.indexOf(visible[event.currentIndex]);
    moveItemInArray(cols, from, to);
    this.columns.set(cols);
  }

  protected toggleColumn(key: keyof Order): void {
    this.columns.update((cols) => cols.map((c) => (c.key === key ? { ...c, visible: !c.visible } : c)));
  }

  protected resetColumns(): void {
    this.columns.set(DEFAULT_COLUMNS.map((c) => ({ ...c })));
  }

  protected statusClass(status: OrderStatus): string {
    return 'st-' + status.toLowerCase().replace(' ', '-');
  }

  private restoreColumns(): ColumnDef[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { key: keyof Order; visible: boolean }[];
        const byKey = new Map(DEFAULT_COLUMNS.map((c) => [c.key, c]));
        const restored = saved
          .filter((s) => byKey.has(s.key))
          .map((s) => ({ ...byKey.get(s.key)!, visible: s.visible }));
        // append any new columns not present in saved prefs
        const missing = DEFAULT_COLUMNS.filter((c) => !saved.some((s) => s.key === c.key)).map((c) => ({ ...c }));
        const result = [...restored, ...missing];
        if (result.some((c) => c.visible)) return result;
      }
    } catch {
      /* ignore corrupt prefs */
    }
    return DEFAULT_COLUMNS.map((c) => ({ ...c }));
  }
}
