import { Component, Input } from '@angular/core';
import { HeadingAttributes } from 'src/app/models/types';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent {
  @Input() attrs!: HeadingAttributes;
}
