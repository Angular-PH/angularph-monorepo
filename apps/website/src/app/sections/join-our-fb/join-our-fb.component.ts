import { Component,signal,inject, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
 
@Component({
  selector: 'app-join-our-fb',
  imports: [],
  templateUrl: './join-our-fb.component.html',
  styleUrl: './join-our-fb.component.scss'
})
export class JoinourfbComponent implements OnInit {

  dataService = inject(DataService);
  description = signal(""); 
  photo  = signal("");
  linkfbgroup = signal("");

  ngOnInit(): void {
    
    const data = this.dataService.communityDetails;
    this.description.set(data.joinFacebookGroupDescription);
    this.photo.set(data.joinFacebookGroupPhoto);
    this.linkfbgroup.set(data.linkfbgroup);
  }
}
