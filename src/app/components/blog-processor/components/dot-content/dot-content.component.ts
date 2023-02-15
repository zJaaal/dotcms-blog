import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dot-content',
  templateUrl: './dot-content.component.html',
  styleUrls: ['./dot-content.component.css'],
})
export class DotContentComponent {
  @Input() data: any = {};
}
