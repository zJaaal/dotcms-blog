import { Component, Input } from '@angular/core';
import { Link, Marks } from 'src/app/models/types';

@Component({
  selector: 'app-text',
  template: `<a
      [class]="classes"
      [href]="link.href"
      [target]="link.target"
      *ngIf="link"
      >{{ text }}</a
    >

    <span *ngIf="!link" [class]="classes">{{ text }}</span>`,
  styleUrls: ['./text.component.css'],
})
export class TextComponent {
  @Input() text: string = '';
  @Input() marks: Marks[] = [];

  link?: Link = undefined;
  classes: string = '';
  ngOnInit() {
    this.classes =
      this.marks
        ?.filter(({ type }) => type !== 'link')
        .map(({ type }) => type)
        .join(' ') || '';

    this.link = this.marks?.find(({ type }) => type == 'link')?.attrs as Link;
  }
}
