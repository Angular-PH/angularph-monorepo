import { Component, inject, OnInit, signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { ContenfulService } from '../../shared/services/contenful.service';
import { DatePipe } from '@angular/common';
import { sortByDate } from '../../shared/utilities/date';

@Component({
  selector: 'app-upcoming',
  imports: [DatePipe],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
})
export class UpcomingComponent implements OnInit {
  public dataService = inject(ContenfulService);
  public eventItems = signal<Array<Activity>>([]);

  ngOnInit(): void {
    this.dataService.getEvents().then((events) => {
      const filteredEvents = this.filterUpcomingEvent(events);
      this.eventItems.set(filteredEvents);
    });
  }

  private filterUpcomingEvent(events: Activity[]): Activity[] {
    const today = new Date();

    const futureEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate > today;
    });

    if (futureEvents.length === 0) {
      return [];
    }

    return sortByDate<Activity>(futureEvents, 'desc').splice(0, 1);
  }
}
