import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { BlogInfo } from 'src/app/models/blogInfo.model';
import { BlogsService } from 'src/app/services/blogs/blogs.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
  blogsList: BlogInfo[] = [];
  loading: boolean = false;
  rest: number[] = [];
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
        //Side effect
        tap(() => (this.loading = true)),
        //This creates an observable from the result of the first observable
        switchMap(({ year, page }) => {
          return this.blogs.getInfo(year == 'All' ? undefined : +year, page);
        })
      )
      // Here we subscribe to the last observable
      .subscribe((response) => {
        this.blogsList = response;

        this.loading = false;

        this.rest = Array.from({
          length: environment.ITEM_LIMIT_PER_PAGE - response.length,
        });

        this.empty = !Boolean(response.length);

        if (this.firstRender) {
          if (!this.router.routerState.snapshot.url.replace('/', '').length)
            this.router.navigate([response[0].id]);

          this.firstRender = false;
        }
      });
  }
}
