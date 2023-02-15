import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  template: `<p [ngStyle]="attrs">
    <ng-content></ng-content>
  </p>`,
  styleUrls: ['./paragraph.component.css'],
})
export class ParagraphComponent {
  @Input() attrs: any = {};
}
