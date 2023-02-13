import { Component } from '@angular/core';
import { BlogsService } from './services/blogs/blogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dotcms-blog';

  constructor(private blogs: BlogsService) {}

  ngOnInit() {
    this.blogs.getInfo().subscribe((response) => console.log(response));
  }
}
