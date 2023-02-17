import { Component, Input } from '@angular/core';
import { HeadingAttributes } from 'src/app/models/Text.model';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
})
export class HeadingComponent {
  @Input() attrs!: HeadingAttributes;
}
