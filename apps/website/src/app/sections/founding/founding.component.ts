import { Component, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-founding',
  imports: [],
  templateUrl: './founding.component.html',
  styleUrl: './founding.component.scss',
})
export class FoundingComponent implements OnInit {
  dataService = inject(DataService);

  historyDescription = signal('');
  historyPhoto = signal('');

  ngOnInit(): void {
    const historyDetails = this.dataService.communityDetails;
    this.historyDescription.set(historyDetails.history);
    this.historyPhoto.set(historyDetails.historyPhoto);
  }
}
