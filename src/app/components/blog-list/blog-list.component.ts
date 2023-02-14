import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  loading: boolean = false;
  blogListLength: number = 4;
  rest: number[] = [];
  empty: boolean = false;
  firtsRender: boolean = true;

  constructor(
    private blogs: BlogsService,
    private filterService: FilterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.filterService.currentFilter.subscribe(({ year, page }) => {
      this.loading = true;
      this.blogs
        .getInfo(year == 'All' ? undefined : +year, page)
        .subscribe((response) => {
          this.blogsList = [...response];
          this.loading = false;
          this.blogListLength = response.length;
          this.rest = Array.from({ length: 4 - this.blogListLength });
          this.empty = !Boolean(this.blogListLength);

          if (!this.empty && this.firtsRender) {
            this.router.navigate([this.blogsList[0].id]);
            this.firtsRender = false;
          }
        });
    });
  }
}
