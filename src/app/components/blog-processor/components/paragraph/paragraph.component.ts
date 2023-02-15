import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  template: `<div class="mb-2 mt-2">
    <p [ngStyle]="attrs">
      <ng-content></ng-content>
    </p>
  </div>`,
  styleUrls: ['./paragraph.component.css'],
})
export class ParagraphComponent {
  @Input() attrs: any = {};
}
