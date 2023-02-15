import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BlogData } from 'src/app/models/blogData.model';
import { BlogsService } from 'src/app/services/blogs/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  constructor(private route: ActivatedRoute, private blog: BlogsService) {}

  data$!: Observable<BlogData | undefined>;

  ngOnInit() {
    this.data$ = this.route.params.pipe(
      switchMap(({ id }) => this.blog.getBlog(id))
    );
  }
}
