import { Component, Input } from '@angular/core';
import { Marks, Link } from 'src/app/models/Text.model';

@Component({
  selector: 'app-text',
  templateUrl: `./text.component.html`,
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
