import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  constructor(private route: ActivatedRoute, private blog: BlogsService) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.blog.getBlog(id).subscribe((res) => console.log(res));
    });
  }
}
