import { Component, inject, OnInit, signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { ContenfulService } from '../../shared/services/contenful.service';
import { DatePipe } from '@angular/common';
import { sortByDate } from '../../shared/utilities/date';

@Component({
  selector: 'app-previous-events',
  templateUrl: './previous-events.component.html',
  styleUrl: './previous-events.component.scss',
  imports: [DatePipe],
})
export class PreviousEventsComponent implements OnInit {
  public dataService = inject(ContenfulService);
  public eventItems = signal<Array<Activity>>([]);

  public ngOnInit(): void {
    this.dataService.getEvents().then((events) => {
      const filteredEvents = this.filterPreviousEvents(events);
      this.eventItems.set(filteredEvents);
    });
  }

  public watchReplay(replay: string) {
    window.open(replay, '_blank');
  }

  private filterPreviousEvents(events: Activity[]): Activity[] {
    const today = new Date();

    const pastEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate <= today;
    });

    if (pastEvents.length === 0) {
      return [];
    }

    return sortByDate<Activity>(pastEvents, 'desc');
  }
}
