import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { STATE } from 'src/app/emuns/state.enum';
import { BlogData } from 'src/app/models/BlogData.model';
import { BlogsService } from 'src/app/services/blogs/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  //Observable to be use in async pipe
  data$!: Observable<BlogData | undefined>;
  state: STATE = STATE.LOADING;

  constructor(private route: ActivatedRoute, private blog: BlogsService) {}

  ngOnInit() {
    this.data$ = this.route.params.pipe(
      switchMap(({ id }) => this.blog.getBlog(id)),
      tap((data) => (this.state = data ? STATE.COMPLETED : STATE.ERROR))
    );
  }
}
