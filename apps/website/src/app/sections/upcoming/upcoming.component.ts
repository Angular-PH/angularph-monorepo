import { Component,inject,signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { DataService } from '../../shared/services/data.service';
import { ContenfulService } from '../../shared/services/contenful.service';

@Component({
  selector: 'upcoming',
  imports: [],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss'
})
export class UpcomingComponent {
  public dataService = inject(ContenfulService);
  public eventItems = signal<Array<Activity>>([]);
          
  ngOnInit(): void { 
    this.dataService.getEvents().then((events) => {
      this.eventItems.set(events.sort().splice(0, 1));
    });
  }
}
