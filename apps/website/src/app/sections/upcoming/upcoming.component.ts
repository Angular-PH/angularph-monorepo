import { Component,inject,signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'upcoming',
  imports: [],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss'
})
export class UpcomingComponent {
  dataService = inject(DataService);
 
  eventItems = signal<Array<Activity>>([]);

  ngOnInit(): void { 
    this.eventItems.set(this.dataService.eventItems.sort().splice(0,1)); 
  }
}
