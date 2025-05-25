import { Component, inject, OnInit, signal } from '@angular/core';
import { Blog } from '@angularph-monorepo/models';
import { ContenfulService } from '../../shared/services/contenful.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit {
  dataService = inject(ContenfulService);

  blogItems = signal<Array<Blog>>([]);

  ngOnInit(): void {
    // implemnt with contenful
    this.dataService.getBlogs().then((blogs) => {
      this.blogItems.set(blogs);
    });
  }
}
