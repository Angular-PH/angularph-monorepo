import { Component, inject, OnInit, signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { ContenfulService } from '../../shared/services/contenful.service';

@Component({
  selector: 'app-upcoming',
  imports: [],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
})
export class UpcomingComponent implements OnInit {
  public dataService = inject(ContenfulService);
  public eventItems = signal<Array<Activity>>([]);

  ngOnInit(): void {
    this.dataService.getEvents().then((events) => {
      this.eventItems.set(events.sort().splice(0, 1));
    });
  }
}
