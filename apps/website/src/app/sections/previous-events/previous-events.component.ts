import { Component, inject, OnInit, signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { ContenfulService } from '../../shared/services/contenful.service';

@Component({
  selector: 'app-previous-events',
  templateUrl: './previous-events.component.html',
  styleUrl: './previous-events.component.scss',
})
export class PreviousEventsComponent implements OnInit {
  public dataService = inject(ContenfulService);
  public eventItems = signal<Array<Activity>>([]);

  private sortEvents(events: Activity[]): Activity[] {
    return events.sort((a: Activity, b: Activity) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }

  public ngOnInit(): void {
    this.dataService.getEvents().then((events) => {
      this.eventItems.set(this.sortEvents(events));
    });
  }

  public watchReplay(replay: string) {
    window.open(replay, '_blank');
  }
}
