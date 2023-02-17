import { Component, Input } from '@angular/core';
import { BlogData } from 'src/app/models/BlogData.model';

@Component({
  selector: 'app-blog-heading',
  templateUrl: './blog-heading.component.html',
  styleUrls: ['./blog-heading.component.css'],
})
export class BlogHeadingComponent {
  @Input() blogData!: BlogData;
}
