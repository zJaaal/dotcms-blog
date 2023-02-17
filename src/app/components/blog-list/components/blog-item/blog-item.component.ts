import { Component, Input } from '@angular/core';
import { BlogInfo } from 'src/app/models/blogInfo.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
})
export class BlogItemComponent {
  @Input() blogData!: BlogInfo;

  constructor() {}
}
