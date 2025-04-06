import { Component,inject,signal } from '@angular/core';
import { FoundingComponent } from '../../sections/founding/founding.component';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-about-us',
  imports: [FoundingComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutusComponent { 
  
   dataService = inject(DataService); 
   missionDescription  = signal("");
   missionPhoto = signal("");
   visionDescription  = signal("");
   visionPhoto = signal("");
  

  ngOnInit(): void {
    
    const communityDetails = this.dataService.communityDetails;
   
    this.missionDescription.set(communityDetails.mission);
    this.missionPhoto.set(communityDetails.missionPhoto);
    this.visionDescription.set(communityDetails.vision);
    this.visionPhoto.set(communityDetails.missionPhoto); 

  }
}
