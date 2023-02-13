import { Component } from '@angular/core';
import { BlogInfo } from 'src/app/models/blogInfo.model';
import { BlogsService } from 'src/app/services/blogs/blogs.service';
import { YearService } from 'src/app/services/year/year.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
  blogsList: BlogInfo[] = [];

  constructor(private blogs: BlogsService, private yearService: YearService) {}

  ngOnInit() {
    this.yearService.currentYear.subscribe((year) => {
      this.blogs
        .getInfo(year == 'All' ? undefined : +year)
        .subscribe((response) => {
          this.blogsList = [...response];
          console.log(this.blogsList);
        });
    });
  }
}
