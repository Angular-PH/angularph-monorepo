import { Component, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'our-numbers',
  imports: [],
  templateUrl: './our-numbers.component.html',
  styleUrl: './our-numbers.component.scss'
})
export class OurnumbersComponent implements OnInit {

  dataService = inject(DataService);

  fbGroupMembersCount = signal("");
  fbFollowersCount = signal("");
  seminarsCount = signal("");
  yearsCount = signal("");

  

  ngOnInit(): void {
       
    const data = this.dataService.communityDetails.numbers;
    this.fbFollowersCount.set(data['fb-followers']);
    this.fbGroupMembersCount.set(data['fb-group']);
    this.seminarsCount.set(data['seminars']);
    this.yearsCount.set(data['years']);

  }

}
