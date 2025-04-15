import { Component, inject, OnInit, signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { ContenfulService } from '../../shared/services/contenful.service';
import { DatePipe } from '@angular/common';
import { filterByTimeframe, TimeframeType } from '../../shared/utilities/date';

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
      const previousEvents = filterByTimeframe(events, TimeframeType.PAST);
      this.eventItems.set(previousEvents);
    });
  }

  public watchReplay(replay: string) {
    window.open(replay, '_blank');
  }
}
