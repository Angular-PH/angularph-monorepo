import { Component, inject, OnInit,signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { DataService } from '../../shared/services/data.service';
   
@Component({
  selector: 'previous-events',
  imports: [],
  templateUrl: './previous-events.component.html',
  styleUrl: './previous-events.component.scss'
})
export class PreviousEventsComponent implements OnInit {

    dataService = inject(DataService);
 
    eventItems = signal<Array<Activity>>([]);

    ngOnInit(): void { 
      this.eventItems.set(this.dataService.eventItems.sort().slice(1,5)); 
    }

}
