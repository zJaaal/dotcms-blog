import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  template: `<a
      [class]="classes"
      [href]="link.attrs.href"
      [target]="link.attrs.target"
      *ngIf="link"
      >{{ text }}</a
    >

    <span *ngIf="!link" [class]="classes">{{ text }}</span>`,
  styleUrls: ['./text.component.css'],
})
export class TextComponent {
  @Input() text: string = '';
  @Input() marks: any[] = [];

  link: any = undefined;
  classes: string = '';
  ngOnInit() {
    this.classes =
      this.marks
        ?.filter(({ type }) => type !== 'link')
        .map(({ type }) => type)
        .join(' ') || '';

    this.link = this.marks?.find(({ type }) => type == 'link');
  }
}
