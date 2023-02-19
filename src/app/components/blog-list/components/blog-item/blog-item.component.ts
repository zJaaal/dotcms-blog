import { Component, Input } from '@angular/core';
import { BlogData } from 'src/app/models/BlogData.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
})
export class BlogItemComponent {
  @Input() blogData!: BlogData;

  constructor() {}
}
