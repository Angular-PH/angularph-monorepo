import { Component,signal,inject } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
 
@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactusComponent {
   
   dataService = inject(DataService);  
   contactItems = signal<any[]>([]);
  

  ngOnInit(): void {
    
    this.contactItems.set(this.dataService.communityDetails.contacts); 
    
  }
}
