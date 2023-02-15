import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: '[app-blog-processor]',
  templateUrl: './blog-processor.component.html',
  styleUrls: ['./blog-processor.component.css'],
})
export class BlogProcessorComponent {
  @Input() blogContent?: any;
  production: boolean = environment.PRODUCTION;
}
