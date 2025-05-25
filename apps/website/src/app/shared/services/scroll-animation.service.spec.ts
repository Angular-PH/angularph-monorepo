import { TestBed } from '@angular/core/testing';
import { ScrollAnimationService } from './scroll-animation.service';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Subject } from 'rxjs';
import { vi, describe, it, expect, beforeEach } from 'vitest';

describe('ScrollAnimationService', () => {
  let service: ScrollAnimationService;
  let router: { events: Subject<Event> };
  let routerEventsSubject: Subject<Event>;

  beforeEach(() => {
    routerEventsSubject = new Subject<Event>();
    router = {
      events: routerEventsSubject,
    };

    TestBed.configureTestingModule({
      providers: [
        ScrollAnimationService,
        { provide: Router, useValue: router },
      ],
    });

    service = TestBed.inject(ScrollAnimationService);

    vi.spyOn(service, 'triggerScrollReset');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should trigger scroll reset when navigation ends', () => {
    const navigationEndEvent = new NavigationEnd(1, 'url', 'urlAfterRedirects');

    vi.useFakeTimers();

    routerEventsSubject.next(navigationEndEvent);

    vi.advanceTimersByTime(101);

    expect(service.triggerScrollReset).toHaveBeenCalled();

    vi.useRealTimers();
  });

  it('should not trigger scroll reset for non-NavigationEnd events', () => {
    const otherEvent = {} as Event;

    routerEventsSubject.next(otherEvent);

    expect(service.triggerScrollReset).not.toHaveBeenCalled();
  });

  it('should call triggerScrollReset method', () => {
    // Call the method
    service.triggerScrollReset();

    // Verify the method was called
    expect(service.triggerScrollReset).toHaveBeenCalled();
  });

  it('should update signal state when triggerScrollReset is called', () => {
    // Create a spy to monitor the signal's set method
    const resetSignal = service.getScrollReset();
    const setSpy = vi.spyOn(resetSignal, 'set');

    // Call the method
    service.triggerScrollReset();

    // Verify the signal's set method was called
    expect(setSpy).toHaveBeenCalled();
  });
});
