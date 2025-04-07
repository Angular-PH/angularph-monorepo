import { Component, signal, inject, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
})
export class ContactusComponent implements OnInit {
  dataService = inject(DataService);
  contactItems = signal<any[]>([]);

  ngOnInit(): void {
    this.contactItems.set(this.dataService.communityDetails.contacts);
  }
}
