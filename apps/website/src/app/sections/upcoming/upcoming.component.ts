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
      this.eventItems.set(sortByDate<Activity>(events, 'desc'));
    });
  }
}
