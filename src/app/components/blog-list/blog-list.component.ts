import { Component } from '@angular/core';
import { BlogInfo } from 'src/app/models/blogInfo.model';
import { BlogsService } from 'src/app/services/blogs/blogs.service';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
  blogsList: BlogInfo[] = [];

  constructor(
    private blogs: BlogsService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.filterService.currentFilter.subscribe(({ year, page }) => {
      this.blogs
        .getInfo(year == 'All' ? undefined : +year, page)
        .subscribe((response) => {
          this.blogsList = [...response];
          console.log(this.blogsList);
        });
    });
  }
}
