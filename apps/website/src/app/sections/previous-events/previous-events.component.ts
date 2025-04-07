import { Component, inject, OnInit, signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { ContenfulService } from '../../shared/services/contenful.service';

@Component({
  selector: 'app-previous-events',
  imports: [],
  templateUrl: './previous-events.component.html',
  styleUrl: './previous-events.component.scss',
})
export class PreviousEventsComponent implements OnInit {
  public dataService = inject(ContenfulService);
  public eventItems = signal<Array<Activity>>([]);

  public ngOnInit(): void {
    this.dataService.getEvents().then((events) => {
      this.eventItems.set(events);
    });
  }

  public watchReplay(replay: string) {
    window.open(replay, '_blank');
  }
}
