import {
  Directive,
  ElementRef,
  input,
  effect,
  inject,
  OnDestroy,
  OnInit,
  Renderer2,
  numberAttribute,
  signal,
} from '@angular/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  animationType = input<'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight'>(
    'fadeIn'
  );
  animationDelay = input(0, { transform: numberAttribute });
  animationDuration = input(800, { transform: numberAttribute });
  animationThreshold = input(0.1, {
    transform: (value: string | number) =>
      typeof value === 'string' ? parseFloat(value) : value,
  });

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private scrollAnimationService = inject(ScrollAnimationService);

  private observer: IntersectionObserver | null = null;

  private isVisible = signal(false);

  constructor() {
    effect(() => {
      this.scrollAnimationService.getScrollReset();
      this.resetAnimation();
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
      this.renderer.setStyle(
        this.el.nativeElement,
        'transition',
        `all ${this.animationDuration()}ms ease-out ${this.animationDelay()}ms`
      );

      this.setInitialTransform();
      this.setupObserver();
    }, 0);
  }

  private setInitialTransform(): void {
    const animationType = this.animationType();

    if (animationType === 'fadeInUp') {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        'translateY(50px)'
      );
    } else if (animationType === 'fadeInLeft') {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        'translateX(-50px)'
      );
    } else if (animationType === 'fadeInRight') {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        'translateX(50px)'
      );
    }
  }

  private setupObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update visibility state
            this.isVisible.set(true);

            setTimeout(() => {
              this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
              this.renderer.setStyle(
                this.el.nativeElement,
                'transform',
                'translate(0)'
              );
            }, 10);

            if (this.observer) {
              this.observer.disconnect();
              this.observer = null;
            }
          }
        });
      },
      {
        threshold: this.animationThreshold(),
        rootMargin: '0px 0px -100px 0px',
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  private resetAnimation(): void {
    if (!this.isElementInViewport()) {
      this.isVisible.set(false);

      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
      this.setInitialTransform();

      if (this.observer) {
        this.observer.disconnect();
      }

      this.setupObserver();
    }
  }

  private isElementInViewport(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
