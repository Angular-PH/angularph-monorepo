import { Component, inject, OnInit, signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { ContenfulService } from '../../shared/services/contenful.service';
import { DatePipe } from '@angular/common';
import { sortByDate } from '../../shared/utilities/date';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
  dataService = inject(ContenfulService);

  eventItems = signal<Array<Activity>>([]);

  ngOnInit(): void {
    this.dataService.getEvents().then((events) => {
      this.eventItems.set(sortByDate<Activity>(events, 'desc'));
    });
  }
}
