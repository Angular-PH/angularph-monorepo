import { Injectable, signal, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollAnimationService {
  private router = inject(Router);
  private scrollReset = signal<void | null>(null);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          this.triggerScrollReset();
        }, 100);
      });
  }

  getScrollReset() {
    return this.scrollReset;
  }

  triggerScrollReset() {
    this.scrollReset.set(undefined);
  }
}
