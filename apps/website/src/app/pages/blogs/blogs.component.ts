import { Component, inject, OnInit, signal } from '@angular/core';
import { Blog } from '@angularph-monorepo/models';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit {
  dataService = inject(DataService);

  blogItems = signal<Array<Blog>>([]);

  ngOnInit(): void {
    // implemnt with contenful
    this.blogItems.set([]);
  }
}
