import { Component, Input } from '@angular/core';
// import { UrlBuilderService } from 'src/app/services/urlBuilder/url-builder.service';
import { environment } from 'src/environments/environment';
import { Contentlet } from './dot-image.types';

@Component({
  selector: 'app-dot-image',
  templateUrl: './dot-image.component.html',
  styleUrls: ['./dot-image.component.css'],
})
export class DotImageComponent {
  // Add object
  @Input() contentlet!: Contentlet;

  finalSRC: string = '';
  private readonly fallbackSrc: string = 'https://www.placeholder.com/';

  constructor() {}

  ngOnChanges() {
    this.finalSRC =
      environment.API_BASE +
      this.contentlet.src +
      `/${this.contentlet.width}w/webp`;
  }

  onError() {
    this.finalSRC =
      this.fallbackSrc +
      `${this.contentlet.width || 500}.webp/110B36?text=dotCMS`;
  }
}
