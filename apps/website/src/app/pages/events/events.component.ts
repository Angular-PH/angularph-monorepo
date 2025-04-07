import { Component, inject, OnInit, signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { ContenfulService } from '../../shared/services/contenful.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
  dataService = inject(ContenfulService);

  eventItems = signal<Array<Activity>>([]);

  ngOnInit(): void {
    this.dataService.getEvents().then((events) => {
      this.eventItems.set(
        events.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      );
    });
  }
}
