import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-blog-processor]',
  templateUrl: './blog-processor.component.html',
  styleUrls: ['./blog-processor.component.css'],
})
export class BlogProcessorComponent {
  @Input() blogContent?: any;

  ngOnInit() {
    console.log(this.blogContent);
  }
  // ngOnChanges() {
  //   console.log(this.blogContent);
  // }
}
