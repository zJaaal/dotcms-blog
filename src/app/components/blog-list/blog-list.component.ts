import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { STATE } from 'src/app/emuns/state.enum';
import { BlogData, BlogDataResponse } from 'src/app/models/BlogData.model';
import { BlogsService } from 'src/app/services/blogs/blogs.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
  blogsList: BlogData[] = [];
  maxPage: number = 1;
  state: STATE = STATE.LOADING;
  empty: boolean = false;
  firstRender: boolean = true;

  constructor(
    private blogs: BlogsService,
    private filterService: FilterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.filterService.currentFilter
      .pipe(
        //This creates an observable from the result of the first observable
        switchMap(({ year, page }) => {
          return this.blogs.getBlogList(
            year == 'All' ? undefined : +year,
            page
          );
        })
      )
      // Here we subscribe to the last observable
      .subscribe(({ data, maxPage }: BlogDataResponse) => {
        this.blogsList = data;
        this.maxPage = maxPage;

        this.state = data.length ? STATE.COMPLETED : STATE.ERROR;

        if (this.firstRender && this.state != STATE.ERROR) {
          //This is to navigate to the first ocurrence in the first render
          //and if the user didn't enter a path to a blog
          if (!this.router.routerState.snapshot.url.replace('/', '').length)
            this.router.navigate([data[0].id]);

          this.firstRender = false;
        }
      });
  }
}
