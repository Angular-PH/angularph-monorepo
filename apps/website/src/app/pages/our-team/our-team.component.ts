import { Component, inject,OnInit,signal } from '@angular/core';
import { AvatarComponent } from '@angularph-monorepo/ui';
import { DataService } from '../../shared/services/data.service';
import { CommunityLead } from '@angularph-monorepo/models';

 


@Component({
  selector: 'our-team', 
  imports: [AvatarComponent],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss',
  standalone: true
})
export class OurteamComponent implements OnInit {


  dataService = inject(DataService); 
  communityLeadItems = signal<Array<CommunityLead>>([]);
  


  ngOnInit(): void { 
    this.communityLeadItems.set(this.dataService.communityLeadsItems); 
  }

}
