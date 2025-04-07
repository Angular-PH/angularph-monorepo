import { Component, inject, OnInit, signal } from '@angular/core';
import { FoundingComponent } from '../../sections/founding/founding.component';
import { JoinourfbComponent } from '../../sections/join-our-fb/join-our-fb.component';
import { OurnumbersComponent } from '../../sections/our-numbers/our-numbers.component';
import { PreviousEventsComponent } from '../../sections/previous-events/previous-events.component';
import { UpcomingComponent } from '../../sections/upcoming/upcoming.component';
import { OurteamComponent } from '../our-team/our-team.component';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  imports: [FoundingComponent, OurnumbersComponent, UpcomingComponent, OurteamComponent, PreviousEventsComponent,JoinourfbComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dataService = inject(DataService); 
  description = signal("");  

  ngOnInit(): void {   
    this.description.set(this.dataService.communityDetails.description);
  }

}
