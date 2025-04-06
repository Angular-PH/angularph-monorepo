import { Component, inject, OnInit, signal } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { DataService } from '../../shared/services/data.service';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit{

  dataService = inject(DataService);

  eventItems = signal<Array<Activity>>([]);
    
  ngOnInit(): void { 
    this.eventItems.set(this.dataService.eventItems); 
  }
 
}
