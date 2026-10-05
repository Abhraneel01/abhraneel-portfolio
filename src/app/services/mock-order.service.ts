import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export type OrderStatus = 'Quoted' | 'Booked' | 'In Transit' | 'Delivered' | 'Cancelled';

export interface Order {
  id: string;
  customer: string;
  origin: string;
  destination: string;
  carrier: string;
  status: OrderStatus;
  date: string; // ISO
  amount: number;
}

export interface OrderQuery {
  page: number;
  size: number;
  sortKey: keyof Order;
  sortDir: 'asc' | 'desc';
  search: string;
  status: OrderStatus | 'All';
}

export interface Page<T> {
  rows: T[];
  total: number;
}

/**
 * Fake "server" — simulates a paginated, sortable, filterable REST endpoint
 * entirely in the browser (no backend needed). Latency is simulated with RxJS delay().
 */
@Injectable({ providedIn: 'root' })
export class MockOrderService {
  private readonly db: Order[] = this.seed(137);

  getOrders(q: OrderQuery): Observable<Page<Order>> {
    const term = q.search.trim().toLowerCase();
    let rows = this.db.filter(
      (o) =>
        (q.status === 'All' || o.status === q.status) &&
        (!term || Object.values(o).some((v) => String(v).toLowerCase().includes(term))),
    );

    rows = [...rows].sort((a, b) => {
      const av = a[q.sortKey];
      const bv = b[q.sortKey];
      const cmp = typeof av === 'number' && typeof bv === 'number' ? av - bv : String(av).localeCompare(String(bv));
      return q.sortDir === 'asc' ? cmp : -cmp;
    });

    const start = q.page * q.size;
    return of({ rows: rows.slice(start, start + q.size), total: rows.length }).pipe(delay(650));
  }

  /** Deterministic pseudo-random data so the demo looks the same every visit. */
  private seed(count: number): Order[] {
    let s = 42;
    const rand = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    const pick = <T>(arr: readonly T[]): T => arr[Math.floor(rand() * arr.length)];

    const customers = ['Acme Corp', 'Globex', 'Initech', 'Umbrella Ltd', 'Stark Freight', 'Wayne Logistics', 'Hooli', 'Tata Traders', 'Bengal Agro', 'Soylent Foods'];
    const cities = ['Kolkata', 'Mumbai', 'Delhi', 'Chennai', 'Bengaluru', 'Pune', 'Hyderabad', 'Ahmedabad', 'Jaipur', 'Guwahati'];
    const carriers = ['BlueDart', 'Delhivery', 'DTDC', 'Gati', 'Safexpress', 'XpressBees'];
    const statuses: OrderStatus[] = ['Quoted', 'Booked', 'In Transit', 'Delivered', 'Cancelled'];

    const base = new Date(2026, 8, 30).getTime();
    return Array.from({ length: count }, (_, i) => {
      const origin = pick(cities);
      let destination = pick(cities);
      if (destination === origin) destination = cities[(cities.indexOf(origin) + 3) % cities.length];
      return {
        id: `SC-${(10240 + i).toString()}`,
        customer: pick(customers),
        origin,
        destination,
        carrier: pick(carriers),
        status: pick(statuses),
        date: new Date(base - Math.floor(rand() * 120) * 86_400_000).toISOString(),
        amount: Math.round(2500 + rand() * 97_500),
      };
    });
  }
}
